import Link from 'next/link';
import { type Language } from '@/lib/i18n';
import styles from './Footer.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = lang === 'ja' ? translations : translationsEn;

  const navItems = [
    { href: `/${lang}/`, label: t.nav.home },
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/services`, label: t.nav.services },
    { href: `/${lang}/projects`, label: t.nav.projects },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="Nebula Infinity" className={styles.logoImage} />
              <span className={styles.logoText}>Nebula Infinity</span>
            </div>
            <p className={styles.description}>
              {lang === 'ja'
                ? 'Web3.0技術で未来を創造する'
                : 'Creating the future with Web3.0 technology'}
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t.footer.quickLinks}</h4>
              <nav className={styles.linkList}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t.contact.info.social}</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://twitter.com/N_I_COM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="X (Twitter)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@nebulainfinity.com"
                  className={styles.socialLink}
                  aria-label="Email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
