<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Enforce same-origin requests when Origin header is present
$allowedOrigins = ['https://thetandthu.com', 'https://www.thetandthu.com'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Forbidden origin.']);
    exit;
}

// Server-side IP rate limiting (45s cooldown, max 10/hour per IP)
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/thetandthu_rl_' . hash('sha256', $clientIp) . '.json';
$now = time();

$fp = @fopen($rateFile, 'c+');
if ($fp !== false) {
    if (flock($fp, LOCK_EX)) {
        $rawState = stream_get_contents($fp);
        $timestamps = json_decode($rawState ?: '[]', true);
        if (!is_array($timestamps)) {
            $timestamps = [];
        }
        $timestamps = array_values(array_filter(
            $timestamps,
            static fn($ts): bool => is_int($ts) && ($now - $ts) < 3600
        ));

        $lastTs = end($timestamps);
        if ($lastTs !== false && ($now - $lastTs) < 45) {
            flock($fp, LOCK_UN);
            fclose($fp);
            http_response_code(429);
            echo json_encode([
                'success' => false,
                'message' => 'Please wait a moment before sending another inquiry.',
            ]);
            exit;
        }

        if (count($timestamps) >= 10) {
            flock($fp, LOCK_UN);
            fclose($fp);
            http_response_code(429);
            echo json_encode([
                'success' => false,
                'message' => 'Too many inquiries submitted. Please try again later.',
            ]);
            exit;
        }

        $timestamps[] = $now;
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($timestamps));
        fflush($fp);
        flock($fp, LOCK_UN);
    }
    fclose($fp);
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 16384) {
    http_response_code(413);
    echo json_encode(['success' => false, 'message' => 'Payload too large.']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request payload.']);
    exit;
}

// Honeypot trap
if (!empty($data['honeypot'])) {
    echo json_encode(['success' => true]);
    exit;
}

$cleanHeader = static function (string $value): string {
    return trim(str_replace(["\r", "\n"], ' ', $value));
};

$name = $cleanHeader((string)($data['name'] ?? ''));
$email = $cleanHeader((string)($data['email'] ?? ''));
$phone = $cleanHeader((string)($data['phone'] ?? ''));
$division = strtolower(trim((string)($data['division'] ?? 'general')));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required.']);
    exit;
}

if (mb_strlen($name) > 120 || mb_strlen($email) > 180 || mb_strlen($phone) > 40 || mb_strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Input exceeds maximum allowed length.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

$recipientMap = [
    'polaris' => 'polaris@thetandthu.com',
    'trust-one' => 'trustone@thetandthu.com',
    'general' => 'info@thetandthu.com',
];
$to = $recipientMap[$division] ?? 'info@thetandthu.com';

$divisionLabel = match ($division) {
    'polaris' => 'POLARIS TECH',
    'trust-one' => 'TRUST ONE',
    default => 'GENERAL / CORPORATE',
};

$subject = sprintf('New Corporate Inquiry: %s - %s', $divisionLabel, $name);
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$bodyLines = [
    'New inquiry submitted via thetandthu.com',
    '----------------------------------------',
    'Division : ' . $divisionLabel,
    'Name     : ' . $name,
    'Email    : ' . $email,
    'Phone    : ' . ($phone !== '' ? $phone : '-'),
    '',
    'Message:',
    $message,
];
$body = implode("\r\n", $bodyLines);

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: THET & THU Corporate Portal <info@thetandthu.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = @mail($to, $encodedSubject, $body, $headers, '-finfo@thetandthu.com');

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send inquiry email. Please try again or email us directly.',
    ]);
}
