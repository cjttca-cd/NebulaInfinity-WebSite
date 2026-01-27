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
  const isJa = params.lang === 'ja';
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

  const checkIcon = (
    <svg className={styles.checkIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 12.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );

  const targetIcon = (
    <svg className={styles.resultIconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Link href={`/${params.lang}/projects`} className={styles.backLink}>
            ← {t.projects.backToProjects}
          </Link>
          <span className={styles.eyebrow}>{isJa ? 'プロジェクト詳細' : 'Project detail'}</span>
          <h1 className={styles.title}>
            {project.name[params.lang]}
          </h1>
          <p className={styles.subtitle}>{project.shortDescription[params.lang]}</p>
          <div className={styles.meta}>
            <span
              className={`${styles.statusBadge} ${
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
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  {isJa ? 'プロジェクト概要' : 'Project overview'}
                </h2>
                <p className={styles.sectionSubtitle}>
                  {isJa
                    ? '背景と目標を踏まえた全体像です。'
                    : 'A quick summary of the scope, goals, and impact.'}
                </p>
              </div>
              <Card glass>
                <p className={styles.fullDescription}>
                  {projectDetails.fullDescription[params.lang]}
                </p>
              </Card>
            </div>
          </section>

          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{isJa ? '技術スタック' : 'Tech stack'}</h2>
                <p className={styles.sectionSubtitle}>
                  {isJa
                    ? '堅牢性と拡張性を両立する技術選定です。'
                    : 'A curated stack that balances reliability and speed.'}
                </p>
              </div>
              <div className={styles.bentoGrid}>
                {projectDetails.techStack.map((tech: string, index: number) => (
                  <Card key={index} hover className={`${styles.bentoCard} ${styles.bentoCompact}`}>
                    <div className={styles.techItem}>{tech}</div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{isJa ? '主な機能' : 'Key features'}</h2>
                <p className={styles.sectionSubtitle}>
                  {isJa
                    ? '成果に直結する機能群を整理しています。'
                    : 'Features designed to deliver measurable outcomes.'}
                </p>
              </div>
              <div className={styles.bentoGrid}>
                {projectDetails.features.map((feature: any, index: number) => (
                  <Card key={index} hover className={`${styles.bentoCard} ${styles.bentoCompact}`}>
                    <div className={styles.feature}>
                      <span className={styles.checkIconWrap}>{checkIcon}</span>
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
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>{isJa ? '実績・成果' : 'Results'}</h2>
                  <p className={styles.sectionSubtitle}>
                    {isJa
                      ? 'ビジネスに与えた効果をまとめています。'
                      : 'Highlights of measurable business impact.'}
                  </p>
                </div>
                <Card className={styles.resultsCard}>
                  <div className={styles.resultsList}>
                    {projectDetails.results[params.lang].map((result: string, index: number) => (
                      <div key={index} className={styles.resultItem}>
                        <span className={styles.resultIconWrap}>{targetIcon}</span>
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
          <Card className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>
                {isJa
                  ? '同様のプロジェクトをお考えですか？'
                  : 'Interested in a similar project?'}
              </h2>
              <p className={styles.ctaDescription}>
                {isJa
                  ? '要件整理から実装まで並走します。'
                  : 'We can plan, build, and launch the right workflow together.'}
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{t.nav.contact}</Button>
              </Link>
              <Link href={`/${params.lang}/services`}>
                <Button size="lg" variant="outline">
                  {t.nav.services}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
