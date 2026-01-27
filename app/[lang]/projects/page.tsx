import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';
import projectsData from '@/data/projects/projects.json';

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `${t.projects.title} - Nebula Infinity`,
    description: t.projects.subtitle,
  };
}

export default function ProjectsPage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  const isJa = params.lang === 'ja';

  const rocketIcon = (
    <svg className={styles.projectIconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4.5l-1.5 4.5H6l3.7 2.7-1.4 4.3L12 13.3l3.7 2.7-1.4-4.3L18 9H13.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );

  const boxIcon = (
    <svg className={styles.projectIconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.5 7.5l7.5-4 7.5 4-7.5 4-7.5-4z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 7.5v9l7.5 4 7.5-4v-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M12 11.5v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{isJa ? 'プロジェクト' : 'Projects'}</span>
          <h1 className={styles.title}>{t.projects.title}</h1>
          <p className={styles.subtitle}>{t.projects.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {isJa ? '実績とケーススタディ' : 'Select work & case studies'}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? 'AIとWeb3.0の統合領域で成果を生み出したプロジェクトをご紹介します。'
                : 'A focused selection of AI + Web3.0 engagements with measurable outcomes.'}
            </p>
          </div>
          <div className={styles.bentoGrid}>
            {projectsData.projects.map((project) => (
              <Card key={project.id} hover className={`${styles.bentoCard} ${styles.bentoCompact}`}>
                <div className={styles.projectCard}>
                  <span className={styles.projectIconWrap}>
                    {project.icon ? rocketIcon : boxIcon}
                  </span>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.name[params.lang]}</h3>
                    <span
                      className={`${styles.statusBadge} ${
                        project.status === 'completed' ? styles.completed : styles.inProgress
                      }`}
                    >
                      {project.status === 'completed'
                        ? t.projects.status.completed
                        : t.projects.status.inProgress}
                    </span>
                  </div>
                  <p className={styles.projectDescription}>
                    {project.shortDescription[params.lang]}
                  </p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/${params.lang}/projects/${project.slug}`}>
                    <Button variant="outline" fullWidth>
                      {t.projects.viewDetails}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
