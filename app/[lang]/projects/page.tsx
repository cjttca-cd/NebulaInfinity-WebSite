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

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span className="gradient-text">{t.projects.title}</span>
          </h1>
          <p className={styles.subtitle}>{t.projects.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projectsData.projects.map((project) => (
              <Card key={project.id} hover>
                <div className={styles.projectCard}>
                  <div className={styles.projectIcon}>{project.icon ? '🚀' : '📦'}</div>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.name[params.lang]}</h3>
                    <span
                      className={`${styles.status} ${
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
