'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Info,
} from 'lucide-react';

export default function ContactSection() {
  const { isMM, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'general',
    message: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

    // Honeypot spam check
    if (formData.honeypot) return;

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

    try {
      if (web3Key && web3Key !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Corporate Inquiry: ${formData.division.toUpperCase()} - ${formData.name}`,
            from_name: 'THET & THU Holding Portal',
            ...formData,
          }),
        });

        const data = await res.json();
        if (data.success) {
          setSubmitted(true);
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
        // Fallback demo acknowledgment for development without live access key
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitted(true);
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
      className="relative py-20 lg:py-28 bg-[#050B16] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.contact.badge}</span>
          </div>
          <h2
            className={`mt-4 text-white transition-all ${
              isMM
                ? 'text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed tracking-normal font-sans'
                : 'text-2xl sm:text-4xl font-extrabold font-heading tracking-wide'
            }`}
          >
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Corporate Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel p-6 sm:p-8">
              <h3
                className={`text-white mb-2 ${
                  isMM
                    ? 'text-base sm:text-lg font-semibold leading-relaxed tracking-normal font-sans'
                    : 'text-lg font-bold font-heading'
                }`}
              >
                {t.contact.channelsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {t.contact.channelsDesc}
              </p>

              <div className="space-y-3.5">
                <a
                  href="mailto:info@thetandthu.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#040812] border border-white/10 hover:border-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t.contact.holdingEmailLabel}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-amber-300">
                      info@thetandthu.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+959450000000"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#040812] border border-white/10 hover:border-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t.contact.hotlineLabel}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-amber-300">
                      +95 9 450 000 000 / +95 9 790 000 000
                    </div>
                  </div>
                </a>
              </div>

              {/* Divisional Routing Notice */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-cyan-300">Polaris Tech Solution:</strong>
                    <div className="text-slate-400 mt-0.5 leading-relaxed">
                      {t.contact.polarisRouting}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-amber-300">Trust One Properties:</strong>
                    <div className="text-slate-400 mt-0.5 leading-relaxed">
                      {t.contact.trustOneRouting}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#040812] border border-white/10 p-4.5 flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {t.contact.confidentialBadge}
              </span>
            </div>
          </div>

          {/* Right Column: Validated Executive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel-gold p-6 sm:p-10">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3
                    className={`text-white ${
                      isMM
                        ? 'text-xl sm:text-2xl font-semibold leading-relaxed tracking-normal font-sans'
                        : 'text-2xl font-bold font-heading'
                    }`}
                  >
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        division: 'general',
                        message: '',
                        honeypot: '',
                      });
                    }}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <span>{t.contact.sendAnother}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Division Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {t.contact.divisionLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((p) => ({ ...p, division: 'general' }))
                        }
                        className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                          formData.division === 'general'
                            ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                            : 'bg-[#040812] border-white/10 text-slate-300 hover:border-white/25'
                        }`}
                      >
                        <div className="font-bold">{t.contact.divGeneralShort}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{t.contact.divGeneralSub}</div>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData((p) => ({ ...p, division: 'polaris' }))
                        }
                        className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                          formData.division === 'polaris'
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                            : 'bg-[#040812] border-white/10 text-slate-300 hover:border-white/25'
                        }`}
                      >
                        <div className="font-bold text-cyan-300">{t.contact.divPolarisShort}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{t.contact.divPolarisSub}</div>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData((p) => ({ ...p, division: 'trust-one' }))
                        }
                        className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                          formData.division === 'trust-one'
                            ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                            : 'bg-[#040812] border-white/10 text-slate-300 hover:border-white/25'
                        }`}
                      >
                        <div className="font-bold text-amber-300">{t.contact.divTrustOneShort}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{t.contact.divTrustOneSub}</div>
                      </button>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {t.contact.nameLabel} <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#040812] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        {t.contact.emailLabel} <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#040812] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#040812] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      {t.contact.messageLabel} <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#040812] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] via-[#F3C65F] to-[#D4AF37] text-[#050B16] hover:brightness-110 active:scale-98 shadow-xl shadow-amber-500/20 disabled:opacity-60 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.submitButton}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.contact.web3Notice}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
