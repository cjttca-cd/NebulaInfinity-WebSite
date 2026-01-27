import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `${t.about.title} - Nebula Infinity`,
    description: t.about.description,
  };
}

export default function AboutPage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  const isJa = params.lang === 'ja';

  const missionIcon = (
    <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );

  const visionIcon = (
    <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 5.5C7 5.5 2.7 8.7 1 12c1.7 3.3 6 6.5 11 6.5s9.3-3.2 11-6.5c-1.7-3.3-6-6.5-11-6.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );

  const credentials = isJa
    ? ['戦略設計', 'エージェント運用', 'スマートコントラクト', 'プロダクト実装']
    : ['Strategy Design', 'Agent Operations', 'Smart Contracts', 'Product Delivery'];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{isJa ? '会社概要' : 'About Us'}</span>
          <h1 className={styles.heroTitle}>{t.about.title}</h1>
          <p className={styles.heroSubtitle}>{t.about.subtitle}</p>
        </div>
      </section>

      <section className={styles.descriptionSection}>
        <div className="container">
          <Card className={styles.descriptionCard}>
            <p className={styles.description}>{t.about.description}</p>
          </Card>
        </div>
      </section>

      <section className={styles.bentoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{isJa ? '私たちの方針' : 'Our Direction'}</h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? 'ミッションとビジョンを軸に、長期的な価値を設計します。'
                : 'We anchor our work in a clear mission and long-term vision.'}
            </p>
          </div>
          <div className={styles.bentoGrid}>
            <Card className={`${styles.bentoCard} ${styles.bentoFeatured}`}>
              <span className={styles.cardIconWrap}>{missionIcon}</span>
              <h3 className={styles.cardTitle}>{t.about.mission.title}</h3>
              <p className={styles.cardDescription}>{t.about.mission.description}</p>
            </Card>
            <Card className={`${styles.bentoCard} ${styles.bentoCompact}`}>
              <span className={styles.cardIconWrap}>{visionIcon}</span>
              <h3 className={styles.cardTitle}>{t.about.vision.title}</h3>
              <p className={styles.cardDescription}>{t.about.vision.description}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className={styles.credentialsSection}>
        <div className="container">
          <div className={styles.credentialsInner}>
            <p className={styles.credentialsTitle}>
              {isJa ? 'ワークフロー全体を支える専門性' : 'Expertise across the full workflow'}
            </p>
            <div className={styles.credentialsGrid}>
              {credentials.map((item) => (
                <div key={item} className={styles.credentialItem}>
                  <svg className={styles.credentialIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 12.5l4 4 8-9"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
