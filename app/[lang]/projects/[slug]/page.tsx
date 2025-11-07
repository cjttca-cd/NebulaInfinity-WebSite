import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';
import projectsData from '@/data/projects/projects.json';

export async function generateStaticParams() {
  const params = [];
  const langs: Language[] = ['ja', 'en'];

  for (const lang of langs) {
    for (const project of projectsData.projects) {
      params.push({
        lang,
        slug: project.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Language; slug: string };
}) {
  const project = projectsData.projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.name[params.lang]} - Nebula Infinity`,
    description: project.shortDescription[params.lang],
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { lang: Language; slug: string };
}) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  const project = projectsData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Load project details
  let projectDetails;
  try {
    projectDetails = await import(`@/data/projects/${params.slug}.json`);
  } catch {
    projectDetails = null;
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Link href={`/${params.lang}/projects`} className={styles.backLink}>
            ← {t.projects.backToProjects}
          </Link>
          <h1 className={styles.title}>
            {project.name[params.lang]}
          </h1>
          <p className={styles.subtitle}>{project.shortDescription[params.lang]}</p>
          <div className={styles.meta}>
            <span
              className={`${styles.status} ${
                project.status === 'completed' ? styles.completed : styles.inProgress
              }`}
            >
              {project.status === 'completed'
                ? t.projects.status.completed
                : t.projects.status.inProgress}
            </span>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {projectDetails && (
        <>
          <section className={styles.section}>
            <div className="container">
              <Card glass>
                <h2 className={styles.sectionTitle}>
                  {params.lang === 'ja' ? 'プロジェクト概要' : 'Project Overview'}
                </h2>
                <p className={styles.fullDescription}>
                  {projectDetails.fullDescription[params.lang]}
                </p>
              </Card>
            </div>
          </section>

          <section className={styles.section}>
            <div className="container">
              <h2 className={styles.sectionTitle}>
                {params.lang === 'ja' ? '技術スタック' : 'Tech Stack'}
              </h2>
              <div className={styles.techGrid}>
                {projectDetails.techStack.map((tech: string, index: number) => (
                  <Card key={index} hover>
                    <div className={styles.techItem}>{tech}</div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className="container">
              <h2 className={styles.sectionTitle}>
                {params.lang === 'ja' ? '主な機能' : 'Key Features'}
              </h2>
              <div className={styles.featuresGrid}>
                {projectDetails.features.map((feature: any, index: number) => (
                  <Card key={index} hover>
                    <div className={styles.feature}>
                      <span className={styles.checkmark}>✓</span>
                      <span>{feature[params.lang]}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {projectDetails.results && (
            <section className={styles.section}>
              <div className="container">
                <Card glass className={styles.resultsCard}>
                  <h2 className={styles.sectionTitle}>
                    {params.lang === 'ja' ? '実績・成果' : 'Results'}
                  </h2>
                  <div className={styles.resultsList}>
                    {projectDetails.results[params.lang].map((result: string, index: number) => (
                      <div key={index} className={styles.resultItem}>
                        <span className={styles.resultIcon}>🎯</span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </section>
          )}
        </>
      )}

      <section className={styles.ctaSection}>
        <div className="container">
          <Card glass className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              {params.lang === 'ja'
                ? '同様のプロジェクトをお考えですか？'
                : 'Interested in a similar project?'}
            </h2>
            <Link href={`/${params.lang}/contact`}>
              <Button size="lg">{t.nav.contact}</Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
