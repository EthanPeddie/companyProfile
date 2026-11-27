'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Info,
} from 'lucide-react';

export default function ContactSection({
  defaultDivision = 'general',
}: {
  defaultDivision?: 'general' | 'polaris' | 'trust-one';
}) {
  const { isMM, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: defaultDivision as string,
    message: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);

  React.useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    if (cooldown > 0) {
      setErrorMessage(
        isMM
          ? `ကျေးဇူးပြု၍ နောက်ထပ် မက်ဆေ့ခ်ျမပို့မီ ${cooldown} စက္ကန့် စောင့်ဆိုင်းပေးပါ။`
          : `Please wait ${cooldown} seconds before sending another inquiry.`
      );
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.validationError);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(t.contact.emailError);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const isValidUuid =
      !!web3Key &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(web3Key);

    try {
      if (isValidUuid) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Corporate Inquiry: ${formData.division.toUpperCase()} - ${formData.name}`,
            from_name: 'THET & THU Corporate Portal',
            ...formData,
          }),
        });

        const data = await res.json();
        if (data.success) {
          setSubmitted(true);
          setCooldown(60);
        } else {
          setErrorMessage(
            data.message ||
              (isMM
                ? 'မက်ဆေ့ခ်ျ ပေးပို့မှု မအောင်မြင်ပါ။ ကျေးဇူးပြု၍ ခေတ္တစောင့်ပြီး ထပ်မံကြိုးစားပါ သို့မဟုတ် ဖုန်းဖြင့် တိုက်ရိုက်ဆက်သွယ်ပါ။'
                : 'Inquiry submission failed. Please try again or contact our hotline directly.')
          );
          setSubmitted(false);
        }
      } else {
        const res = await fetch('/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          setSubmitted(true);
          setCooldown(60);
        } else {
          setErrorMessage(
            data.message ||
              (isMM
                ? 'မက်ဆေ့ခ်ျ ပေးပို့မှု မအောင်မြင်ပါ။ ကျေးဇူးပြု၍ ခေတ္တစောင့်ပြီး ထပ်မံကြိုးစားပါ သို့မဟုတ် ဖုန်းဖြင့် တိုက်ရိုက်ဆက်သွယ်ပါ။'
                : 'Inquiry submission failed. Please try again or contact our hotline directly.')
          );
          setSubmitted(false);
        }
      }
    } catch {
      setErrorMessage(
        isMM
          ? 'ကွန်ရက်ချိတ်ဆက်မှု အခက်အခဲကြောင့် မက်ဆေ့ခ်ျ မရောက်ရှိပါ။ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားပါ သို့မဟုတ် ဖုန်း/အီးမေးလ်ဖြင့် တိုက်ရိုက်ဆက်သွယ်ပါ။'
          : 'Network error encountered while sending inquiry. Please try again or reach our desk directly.'
      );
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-white scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#0A2463] mb-2">{t.contact.badge}</p>
          <h2
            className={`text-[#001749] [text-wrap:balance] ${
              isMM
                ? 'text-2xl sm:text-3xl font-bold leading-relaxed'
                : 'text-3xl sm:text-4xl font-extrabold font-heading tracking-tight'
            }`}
          >
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#42526E] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 5 cols: Direct Corporate Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#140B29]">{t.contact.channelsTitle}</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#433B54] leading-relaxed">
                {t.contact.channelsDesc}
              </p>
            </div>

            <div className="divide-y divide-[#140B29]/10 border-t border-b border-[#140B29]/10">
              <a
                href="mailto:info@thetandthu.com"
                className="py-4 flex items-center gap-3.5 group"
              >
                <Mail className="w-4 h-4 text-[#4A2B88] flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#6B637A]">{t.contact.holdingEmailLabel}</div>
                  <div className="text-sm font-semibold text-[#140B29] group-hover:text-[#4A2B88]">
                    info@thetandthu.com
                  </div>
                </div>
              </a>

              <div className="py-4 flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-[#4A2B88] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-[#6B637A]">
                    {t.contact.hotlineLabel} (THET &amp; THU)
                  </div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2 font-mono text-sm font-semibold text-[#140B29]">
                    <a href="tel:+9595056524" className="hover:text-[#4A2B88]">
                      09 505 6524
                    </a>
                    <span className="text-[#140B29]/20">/</span>
                    <a href="tel:+959443212306" className="hover:text-[#4A2B88]">
                      09 443 212 306
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-4">
                <div className="text-xs font-semibold text-[#4A2B88]">Polaris Tech Solution</div>
                <div className="text-xs text-[#6B637A] mt-0.5">{t.contact.polarisRouting}</div>
                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono font-semibold text-[#140B29]">
                  <a href="mailto:polaris@thetandthu.com" className="hover:text-[#4A2B88]">
                    polaris@thetandthu.com
                  </a>
                  <a href="tel:+959780654277" className="hover:text-[#4A2B88]">
                    09 780 654 277
                  </a>
                </div>
              </div>

              <div className="py-4">
                <div className="text-xs font-semibold text-[#9A540E]">Trust One Properties</div>
                <div className="text-xs text-[#6B637A] mt-0.5">{t.contact.trustOneRouting}</div>
                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono font-semibold text-[#140B29]">
                  <a href="mailto:trustone@thetandthu.com" className="hover:text-[#9A540E]">
                    trustone@thetandthu.com
                  </a>
                  <a href="tel:+959795056524" className="hover:text-[#9A540E]">
                    09 79 505 6524
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#433B54]">
              <ShieldCheck className="w-4 h-4 text-[#4A2B88] flex-shrink-0" />
              <span>{t.contact.confidentialBadge}</span>
            </div>
          </div>

          {/* Right 7 cols: Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#140B29]/10 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#140B29]">{t.contact.successTitle}</h3>
                <p className="mt-2 text-sm text-[#433B54] max-w-md mx-auto leading-relaxed">
                  {t.contact.successMessage}
                </p>
                <button
                  type="button"
                  disabled={cooldown > 0}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData((prev) => ({ ...prev, message: '' }));
                  }}
                  className="mt-6 px-5 py-2.5 rounded-lg bg-[#4A2B88] text-white text-xs font-semibold hover:bg-[#381F6A] disabled:opacity-50"
                >
                  {cooldown > 0
                    ? isMM
                      ? `ထပ်မံပေးပို့ရန် (${cooldown} စက္ကန့်)`
                      : `Send Another (${cooldown}s)`
                    : t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Division Selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#140B29] mb-2">
                    {t.contact.divisionLabel}
                  </label>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
                    role="radiogroup"
                    aria-label={t.contact.divisionLabel}
                  >
                    {[
                      {
                        id: 'general',
                        title: t.contact.divGeneralShort,
                        sub: t.contact.divGeneralSub,
                      },
                      {
                        id: 'polaris',
                        title: t.contact.divPolarisShort,
                        sub: t.contact.divPolarisSub,
                      },
                      {
                        id: 'trust-one',
                        title: t.contact.divTrustOneShort,
                        sub: t.contact.divTrustOneSub,
                      },
                    ].map((opt) => {
                      const active = formData.division === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setFormData((prev) => ({ ...prev, division: opt.id }))}
                          className={`text-left p-3 rounded-xl border transition-all ${
                            active
                              ? 'border-[#140B29] bg-[#F7FAF8] ring-1 ring-[#140B29]'
                              : 'border-[#140B29]/12 hover:border-[#140B29]/30'
                          }`}
                        >
                          <div className="text-xs font-bold text-[#140B29]">{opt.title}</div>
                          <div className="text-[11px] text-[#6B637A] mt-0.5">{opt.sub}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#140B29] mb-1.5">
                    {t.contact.nameLabel} <span className="text-[#E88D17]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#140B29]/15 bg-[#F7FAF8] text-sm text-[#140B29] placeholder:text-[#6B637A]/70 focus:outline-none focus:bg-white focus:border-[#4A2B88]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#140B29] mb-1.5">
                      {t.contact.emailLabel} <span className="text-[#E88D17]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#140B29]/15 bg-[#F7FAF8] text-sm text-[#140B29] placeholder:text-[#6B637A]/70 focus:outline-none focus:bg-white focus:border-[#4A2B88]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#140B29] mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#140B29]/15 bg-[#F7FAF8] text-sm text-[#140B29] placeholder:text-[#6B637A]/70 focus:outline-none focus:bg-white focus:border-[#4A2B88]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#140B29] mb-1.5">
                    {t.contact.messageLabel} <span className="text-[#E88D17]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#140B29]/15 bg-[#F7FAF8] text-sm text-[#140B29] placeholder:text-[#6B637A]/70 focus:outline-none focus:bg-white focus:border-[#4A2B88] resize-y"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-interactive btn-sheen w-full py-3 px-5 rounded-lg bg-[#0A2463] hover:bg-[#001749] text-white text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? t.contact.submitting : t.contact.submitButton}</span>
                </button>

                <div className="flex items-center gap-2 text-[11px] text-[#6B637A]">
                  <Info className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{t.contact.web3Notice}</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
