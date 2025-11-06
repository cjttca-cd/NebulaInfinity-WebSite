'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { type Language } from '@/lib/i18n';
import styles from './Header.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = lang === 'ja' ? translations : translationsEn;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `/${lang}/`, label: t.nav.home },
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/services`, label: t.nav.services },
    { href: `/${lang}/projects`, label: t.nav.projects },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    const newLang = lang === 'ja' ? 'en' : 'ja';
    const currentPath = window.location.pathname.replace(`/${lang}`, '');
    window.location.href = `/${newLang}${currentPath}`;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href={`/${lang}/`} className={styles.logo}>
          <img src="/images/logo.png" alt="Nebula Infinity" className={styles.logoImage} />
          <span className={styles.logoText}>Nebula Infinity</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button onClick={toggleLanguage} className={styles.langButton}>
            {lang === 'ja' ? 'EN' : 'JA'}
          </button>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
