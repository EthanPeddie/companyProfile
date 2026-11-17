# THET & THU CO., LTD. — Corporate & Multi-Division Holding Company Website

Production-ready, international-standard corporate website for **THET & THU CO., LTD.**, built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, configured for **Static Export (`output: 'export'`)** to be hosted on cPanel Shared Hosting (`public_html`).

---

## 🏛️ Company Structure & Brand Architecture

### 1. Parent Company: THET & THU CO., LTD.
- **Tagline:** *"Building A Better Tomorrow Together"*
- **Heritage:** Established 2014 • Over 10 Years of Corporate Stewardship.
- **Theme Colors:** Deep Navy Blue (`#071326` / `#0B192C`) as primary dark background, paired with Metallic Gold (`#D4AF37` / `#F3C65F`) accents and crisp white/slate typography.
- **Core Pillars:** 10+ Years Corporate Stewardship, Dual-Division Synergy, 100% Tailored Delivery, Strict Domestic Regulatory Compliance.

### 2. Division A: Polaris Tech Solution (IT & Software)
- **Tagline:** *"Bespoke Enterprise Systems & Digital Infrastructure"*
- **Accent Color:** Electric Cyan / Glowing Blue (`#00D2FF` / `#38BDF8`).
- **Core Positioning:** Bespoke, custom-engineered software solutions tailored to exact business workflows (strictly custom development, zero generic SaaS compromises).
- **Core Capabilities:**
  1. **Custom Web & Enterprise Applications:** Custom ERP/CRM dashboards, multi-department operational portals, real-time analytics.
  2. **POS & Inventory Management Systems:** Multi-branch synchronization, barcode/QR scanning, stock audits, offline-tolerant checkout.
  3. **Mobile App Development (iOS & Android):** GPS staff attendance, field-force sales ordering, biometric auth, native Flutter & React Native performance.
  4. **Corporate Websites & Cloud Infrastructure:** High-performance Next.js portals, hardened VPS deployment, automated backups, 99.9% uptime.
- **Industries Served:** Retail & Wholesale, Real Estate & Construction, Private Education & Academies, Logistics & Distribution.
- **Engagement Process:** 1. Consultation -> 2. System & UI Architecture -> 3. Agile Development & QA -> 4. Deployment & Long-Term Support.

### 3. Division B: Trust One Properties (Real Estate Division)
- **Tagline:** *"Professional Real Estate Service"*
- **Accent Color:** Royal Gold (`#D4AF37`).
- **Strict Compliance:** Exclusively domestic Myanmar real estate. No foreign or international properties.
- **Core Portfolios:**
  1. **Land & Commercial Plots:** Roadside commercial acreage, Star City / Thanlyin corridor plots, industrial & logistics parcels.
  2. **Luxury Condominiums:** Grand Kan Yeik Thar Condo residences, river & Shwedagon view executive suites.
  3. **Private Residences:** Exclusive gated compound villas, private gardens, landed estates.
  4. **Modern Apartments:** Strategic urban units with verified BCC completion certificates.
- **Advisory Services:** Title Verification (Form 105/106, Grant history), Valuation & Comparative Pricing, Contract Drafting, Seamless Ownership Handover.

---

## 🏢 Office Locations

1. **Head Office (Yangon City):**
   - No.(3), Room No.(9D), Grand Kan Yeik Thar Condo, Kan Yeik Thar Road, Mingalar Taung Nyunt Township, Yangon, Myanmar.
2. **Branch Office (Thanlyin):**
   - ARA Building Y20, 105/B, Star City, ThanLyin Township, Yangon, Myanmar.

---

## 🎨 Logo Assets (`/public/images/`)

The uploaded company logos have been processed and integrated:
- `public/images/thet-and-thu-logo.png` & `.jpg` / `.svg` (Parent Company gold emblem)
- `public/images/polaris-logo.png` & `.jpg` / `.svg` (Polaris Tech electric cyan glowing star mandala)
- `public/images/trust-one-logo.png` & `.jpg` / `.svg` (Trust One Properties gold roof & 1P monogram)

All logos are also automatically copied to the static export output folder `/out/images/` upon running `pnpm build`.

---

## 🌐 Bilingual Support (English & Myanmar)

A lightweight React Context (`LanguageContext.tsx`) provides seamless switching between **English (EN)** and **Burmese Unicode (MM)** with:
- Pure CSS font loading (`Plus Jakarta Sans`, `Cinzel`, and `Noto Sans Myanmar`).
- Elegant, formal corporate Burmese phrasing.
- Persistent language preference in `localStorage`.

---

## 📬 Contact Form & Web3Forms Integration

The contact form is 100% static-compatible (no backend server required) and includes:
- Division selector (`General`, `Polaris Tech`, `Trust One Properties`).
- Real-time client-side validation.
- Anti-spam honeypot field.
- Direct Web3Forms API dispatch.

### Setting your Web3Forms Access Key:
Create a `.env.local` file:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_web3forms_key_here
```
*(Get a free key in 5 seconds at [web3forms.com](https://web3forms.com)). If no key is set, the form gracefully simulates successful transmission with a confirmation modal.*

---

## 🚀 Building & Deploying to cPanel (`public_html`)

### 1. Build Static Output:
```bash
pnpm build
```
This generates the standalone static distribution in the `/out` directory.

### 2. Output Structure:
```
out/
├── .htaccess           <-- Apache/cPanel clean URL rewriting, gzip & caching rules
├── index.html          <-- Corporate Homepage
├── 404.html            <-- Custom 404 Error page
├── polaris/
│   └── index.html      <-- Polaris Tech Solution sub-route
├── trust-one/
│   └── index.html      <-- Trust One Properties sub-route
├── images/             <-- All company logos & graphics
└── _next/              <-- Optimized CSS & JS static bundles
```

### 3. Deploy to cPanel:
1. Log into your cPanel File Manager.
2. Navigate to your target directory (typically `public_html`).
3. Upload and extract the contents of the `/out` folder directly into `public_html`.
4. Ensure `.htaccess` is present in `public_html` (enable "Show Hidden Files" in cPanel File Manager settings if needed).
