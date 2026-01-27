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
  const isJa = params.lang === 'ja';

  const heroHighlights = isJa
    ? [
      { label: 'エージェント設計', value: 'マルチエージェント構成' },
      { label: '自動化運用', value: '可観測なワークフロー' },
      { label: 'Web3.0基盤', value: 'オンチェーン対応' },
    ]
    : [
      { label: 'Agent Design', value: 'Multi-agent systems' },
      { label: 'Automation Ops', value: 'Observable workflows' },
      { label: 'Web3.0 Rails', value: 'On-chain ready' },
    ];

  const bentoCards = isJa
    ? [
      {
        title: 'AIエージェント・オーケストレーション',
        description: '目的に合わせた役割分担、ツール連携、ガードレールを設計し、プロダクト運用に組み込みます。',
        bullets: ['エージェント設計', 'ツール/データ連携', '安全性と人の監督'],
        className: styles.bentoFeatured,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 7.5h12M6 12h6.5M6 16.5h9"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M16.5 4.5l3 3-3 3"
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
        title: '自動化ワークフロー',
        description: '開発・運用・分析を横断するワークフローを構築し、成果までの時間を短縮します。',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4.5 12h5.5l2.5-4 2.5 8 2.5-4H19.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <circle cx="4.5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19.5" cy="12" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        title: 'Web3.0プロトコル設計',
        description: 'スマートコントラクトからオンチェーンUXまで、プロダクトの基盤を設計します。',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M7 7.5h10v9H7z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M7 10.5h10M10.5 7.5v9"
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
        title: '可観測性と運用管理',
        description: '実行ログ、品質メトリクス、リスク管理を統合し、運用に強い体制を作ります。',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 17.5h14"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M7 17.5V11l3 2.5 3-6 4 7.5v2.5"
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
        title: 'デリバリー高速化',
        description: '要件定義から実装、運用までを一体で進め、プロダクトの立ち上げを加速します。',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 15.5l7-7 3 3 4-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M16 7h3v3"
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
        title: 'AI x Web3.0統合設計',
        description: 'オンチェーンデータとAIの知見を繋ぎ、ユースケースに最適な統合体験を設計します。',
        className: styles.bentoWide,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 8.5h6v6H6zM12 11.5h6v6h-6z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M9 8.5V6.5m6 11v2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
        ),
      },
    ]
    : [
      {
        title: 'AI Agent Orchestration',
        description: 'We architect role-based agent systems, toolchains, and guardrails that plug into real operations.',
        bullets: ['Agent architecture', 'Tool + data routing', 'Safety and human oversight'],
        className: styles.bentoFeatured,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 7.5h12M6 12h6.5M6 16.5h9"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M16.5 4.5l3 3-3 3"
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
        title: 'Automation Workflows',
        description: 'Cross-team workflows that connect product, ops, and data into one reliable pipeline.',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4.5 12h5.5l2.5-4 2.5 8 2.5-4H19.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <circle cx="4.5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19.5" cy="12" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        title: 'Web3.0 Protocol Design',
        description: 'From smart contracts to on-chain UX, we build the backbone your product runs on.',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M7 7.5h10v9H7z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M7 10.5h10M10.5 7.5v9"
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
        title: 'Observability + Control',
        description: 'Execution logs, quality metrics, and risk dashboards built for long-term reliability.',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 17.5h14"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M7 17.5V11l3 2.5 3-6 4 7.5v2.5"
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
        title: 'Launch Acceleration',
        description: 'Unified strategy, build, and operations to move products from brief to launch.',
        className: styles.bentoCompact,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 15.5l7-7 3 3 4-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M16 7h3v3"
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
        title: 'AI x Web3.0 Experience',
        description: 'We connect on-chain data with AI intelligence to deliver coherent, secure experiences.',
        className: styles.bentoWide,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 8.5h6v6H6zM12 11.5h6v6h-6z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
            <path
              d="M9 8.5V6.5m6 11v2"
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

  const credentials = isJa
    ? ['戦略設計', 'エージェント運用', 'スマートコントラクト', 'プロダクト実装']
    : ['Strategy Design', 'Agent Operations', 'Smart Contracts', 'Product Delivery'];

  const principles = isJa
    ? [
      {
        title: '成果から逆算',
        description: '達成したい成果を起点に、エージェントとワークフローを設計します。',
      },
      {
        title: '透明性のある運用',
        description: '意思決定の根拠や実行ログを共有し、安心して運用できる体制を作ります。',
      },
      {
        title: '安全性を最優先',
        description: 'オンチェーン特有のリスクを踏まえ、安全性と検証性を担保します。',
      },
    ]
    : [
      {
        title: 'Outcome-driven by default',
        description: 'We start from the result you need and design agents and workflows around it.',
      },
      {
        title: 'Operational transparency',
        description: 'Clear decision trails, logs, and checkpoints keep teams aligned and confident.',
      },
      {
        title: 'Safety first for Web3.0',
        description: 'We prioritize risk controls and verifiable execution for on-chain products.',
      },
    ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{isJa ? 'AIエージェント × 自動化ワークフロー × Web3.0' : 'AI agents · Automation workflows · Web3.0'}</span>
              <h1 className={styles.heroTitle}>{t.hero.title}</h1>
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
              <div className={styles.heroMeta}>
                {heroHighlights.map((item) => (
                  <div key={item.label} className={styles.metaItem}>
                    <span className={styles.metaLabel}>{item.label}</span>
                    <span className={styles.metaValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.heroPanelHeader}>
                <span>{isJa ? 'ワークフロー設計図' : 'Workflow Blueprint'}</span>
                <span className={styles.heroPanelTag}>{isJa ? '稼働中' : 'Live'}</span>
              </div>
              <div className={styles.heroPanelGrid}>
                {heroHighlights.map((item) => (
                  <div key={item.label} className={styles.panelCard}>
                    <span className={styles.panelDot} />
                    <div>
                      <p className={styles.panelLabel}>{item.label}</p>
                      <p className={styles.panelValue}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.heroPanelFooter}>
                <span>{isJa ? '自動化パス' : 'Automation Path'}</span>
                <div className={styles.panelFlow}>
                  <span>{isJa ? '設計' : 'Design'}</span>
                  <span className={styles.flowDivider} />
                  <span>{isJa ? '構築' : 'Build'}</span>
                  <span className={styles.flowDivider} />
                  <span>{isJa ? '運用' : 'Run'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bentoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {isJa ? 'AIエージェントとWeb3.0のための統合設計' : 'Integrated design for AI agents and Web3.0'}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? '構想から実装、運用までを一体化し、成果までの距離を短くします。'
                : 'We connect strategy, implementation, and operations to reduce the distance to outcomes.'}
            </p>
          </div>
          <div className={styles.bentoGrid}>
            {bentoCards.map((card) => (
              <Card key={card.title} hover className={`${styles.bentoCard} ${card.className}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIconWrap}>{card.icon}</span>
                  <span className={styles.cardTitle}>{card.title}</span>
                </div>
                <p className={styles.cardDescription}>{card.description}</p>
                {card.bullets && (
                  <ul className={styles.cardList}>
                    {card.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
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

      <section className={styles.principlesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{isJa ? '私たちの原則' : 'Our principles'}</h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? 'AIエージェントとWeb3.0の運用に必要な基準を明確にします。'
                : 'Clear standards for safe and steady AI + Web3.0 operations.'}
            </p>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map((principle) => (
              <Card key={principle.title} className={styles.principleCard}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <Card className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>
                {isJa ? 'AIエージェント導入を一緒に進めませんか？' : 'Ready to deploy AI agents with Web3.0 workflows?'}
              </h2>
              <p className={styles.ctaDescription}>
                {isJa
                  ? '課題整理からワークフロー設計、実装まで一緒に整理します。'
                  : 'We can scope the workflow, build the system, and guide the launch together.'}
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{t.nav.contact}</Button>
              </Link>
              <Link href={`/${params.lang}/services`}>
                <Button size="lg" variant="outline">
                  {isJa ? 'サービスを見る' : 'View services'}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
