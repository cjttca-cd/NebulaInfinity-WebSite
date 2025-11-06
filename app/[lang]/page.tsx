import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `Nebula Infinity - ${t.hero.title}`,
    description: t.hero.subtitle,
  };
}

export default function HomePage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;

  const services = [
    {
      title: t.services.smartContract.title,
      description: t.services.smartContract.description,
      icon: '🔗',
    },
    {
      title: t.services.web3Content.title,
      description: t.services.web3Content.description,
      icon: '🎨',
    },
    {
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      icon: '💡',
    },
    {
      title: t.services.aiDevelopment.title,
      description: t.services.aiDevelopment.description,
      icon: '🤖',
    },
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className="gradient-text">{t.hero.title}</span>
          </h1>
          <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>
          <div className={styles.heroActions}>
            <Link href={`/${params.lang}/services`}>
              <Button size="lg">{t.hero.cta}</Button>
            </Link>
            <Link href={`/${params.lang}/contact`}>
              <Button size="lg" variant="outline">
                {t.nav.contact}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.services.title}</h2>
            <p className={styles.sectionSubtitle}>{t.services.subtitle}</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Card key={index} hover>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </Card>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href={`/${params.lang}/services`}>
              <Button variant="outline">{t.common.learnMore}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
            <p className={styles.sectionSubtitle}>{t.projects.subtitle}</p>
          </div>
          <div className={styles.projectsTeaser}>
            <Card glass hover>
              <div className={styles.teaserContent}>
                <h3 className={styles.teaserTitle}>
                  {params.lang === 'ja'
                    ? '最新のWeb3.0プロジェクトをご覧ください'
                    : 'View our latest Web3.0 projects'}
                </h3>
                <p className={styles.teaserDescription}>
                  {params.lang === 'ja'
                    ? 'NFTマーケットプレイス、DeFi分析プラットフォームなど、革新的なプロジェクトを展開しています。'
                    : 'We are developing innovative projects including NFT marketplaces and DeFi analytics platforms.'}
                </p>
                <Link href={`/${params.lang}/projects`}>
                  <Button variant="outline">{t.common.viewAll}</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <Card glass className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              {params.lang === 'ja'
                ? 'プロジェクトを始めませんか？'
                : 'Ready to start your project?'}
            </h2>
            <p className={styles.ctaDescription}>
              {params.lang === 'ja'
                ? 'Web3.0やAI技術に関するご相談はお気軽にお問い合わせください。'
                : 'Feel free to contact us for consultation on Web3.0 and AI technologies.'}
            </p>
            <Link href={`/${params.lang}/contact`}>
              <Button size="lg">{t.nav.contact}</Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
