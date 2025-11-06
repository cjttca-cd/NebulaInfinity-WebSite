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

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span className="gradient-text">{t.about.title}</span>
          </h1>
          <p className={styles.subtitle}>{t.about.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Card glass className={styles.descriptionCard}>
            <p className={styles.description}>{t.about.description}</p>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <Card hover>
              <h3 className={styles.cardTitle}>{t.about.mission.title}</h3>
              <p className={styles.cardDescription}>{t.about.mission.description}</p>
            </Card>
            <Card hover>
              <h3 className={styles.cardTitle}>{t.about.vision.title}</h3>
              <p className={styles.cardDescription}>{t.about.vision.description}</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
