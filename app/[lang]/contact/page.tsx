'use client';

import { useState } from 'react';
import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

export default function ContactPage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang: params.lang }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span className="gradient-text">{t.contact.title}</span>
          </h1>
          <p className={styles.subtitle}>{t.contact.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.formSection}>
              <Card glass>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.contact.form.companyPlaceholder}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="inquiryType" className={styles.label}>
                      {t.contact.form.inquiryType} *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">
                        {params.lang === 'ja' ? '選択してください' : 'Please select'}
                      </option>
                      <option value="smartContract">
                        {t.contact.form.inquiryTypes.smartContract}
                      </option>
                      <option value="web3">{t.contact.form.inquiryTypes.web3}</option>
                      <option value="ai">{t.contact.form.inquiryTypes.ai}</option>
                      <option value="other">{t.contact.form.inquiryTypes.other}</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={styles.textarea}
                      rows={6}
                    />
                  </div>

                  {status === 'success' && (
                    <div className={styles.successMessage}>{t.contact.form.success}</div>
                  )}

                  {status === 'error' && (
                    <div className={styles.errorMessage}>{t.contact.form.error}</div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
                  </Button>
                </form>
              </Card>
            </div>

            <div className={styles.infoSection}>
              <Card hover>
                <h3 className={styles.infoTitle}>{t.contact.info.email}</h3>
                <a href="mailto:info@nebulainfinity.com" className={styles.infoLink}>
                  info@nebulainfinity.com
                </a>
              </Card>

              <Card hover>
                <h3 className={styles.infoTitle}>{t.contact.info.social}</h3>
                <div className={styles.socialLinks}>
                  <a
                    href="https://twitter.com/N_I_COM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X (Twitter)
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
