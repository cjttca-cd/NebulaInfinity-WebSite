import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import cardStyles from '@/components/ui/Card.module.css';
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

  const featuredService = {
    title: t.services.smartContract.title,
    description: t.services.smartContract.description,
    icon: (
      <svg className={styles.serviceIconSvg} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8.5 8.5L5 12l3.5 3.5M15.5 8.5L19 12l-3.5 3.5M13.5 6.5l-3 11"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    ),
  };

  const services = [
    {
      title: t.services.web3Content.title,
      description: t.services.web3Content.description,
      icon: (
        <svg className={styles.serviceIconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.5 16.5c3.5-4 6.5-6 10.5-7.5 2.5-.9 4.5.6 4.5 3.2 0 4.7-5.8 7.8-10.5 7.8-2.7 0-4-1.4-4.5-3.5z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M14.5 6.5l1.8 1.8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      ),
    },
    {
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      icon: (
        <svg className={styles.serviceIconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 4.5c3.6 0 6.5 2.5 6.5 5.8 0 2.5-1.8 4.7-4.4 5.5l-2.1 2.2-2.1-2.2C7.3 15 5.5 12.8 5.5 10.3 5.5 7 8.4 4.5 12 4.5z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M9.5 10.5h5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      ),
    },
    {
      title: t.services.aiDevelopment.title,
      description: t.services.aiDevelopment.description,
      icon: (
        <svg className={styles.serviceIconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 7.5h8M8 12h8M8 16.5h5M6 5.5h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
          <path
            d="M10.5 3.5v2M13.5 3.5v2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      ),
    },
  ];

  const principlesTitle = params.lang === 'ja' ? '私たちの原則' : 'Our principles';
  const principles = params.lang === 'ja'
    ? ['実装は堅牢に、説明は平易に。', '長期運用を見据えた設計。', '透明性のあるコミュニケーション。']
    : ['Engineering that is solid, explanations that are clear.', 'Designed for long-term operation.', 'Transparent, steady communication.'];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t.hero.title}
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
          <div className={styles.bentoGrid}>
            <Card
              hover
              className={`${styles.bentoCard} ${styles.bentoFeatured} ${cardStyles.featured}`}
            >
              <div className={styles.bentoHeader}>
                <span className={styles.serviceIcon}>{featuredService.icon}</span>
                <p className={styles.bentoLabel}>
                  {params.lang === 'ja' ? '注目サービス' : 'Featured service'}
                </p>
              </div>
              <h3 className={styles.serviceTitle}>{featuredService.title}</h3>
              <p className={styles.serviceDescription}>{featuredService.description}</p>
              <div className={styles.bentoActions}>
                <Link href={`/${params.lang}/services`}>
                  <Button variant="outline">{t.common.learnMore}</Button>
                </Link>
              </div>
            </Card>
            {services.map((service, index) => (
              <Card
                key={index}
                hover
                className={`${styles.bentoCard} ${styles.bentoSmall} ${cardStyles.compact}`}
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </Card>
            ))}
          </div>
          <div className={styles.principles}>
            <h3 className={styles.principlesTitle}>{principlesTitle}</h3>
            <ul className={styles.principlesList}>
              {principles.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
