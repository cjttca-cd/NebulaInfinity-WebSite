import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import cardStyles from '@/components/ui/Card.module.css';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `${t.services.title} - Nebula Infinity`,
    description: t.services.subtitle,
  };
}

export default function ServicesPage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;

  const featuredService = {
    title: t.services.smartContract.title,
    description: t.services.smartContract.description,
    features:
      params.lang === 'ja'
        ? [
            'Solidityによるスマートコントラクト開発',
            'セキュリティ監査とベストプラクティス',
            'ガス最適化',
            'テストとデプロイメント',
          ]
        : [
            'Smart contract development with Solidity',
            'Security audits and best practices',
            'Gas optimization',
            'Testing and deployment',
          ],
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
      features:
        params.lang === 'ja'
          ? [
              'NFTコレクション企画・開発',
              'DAppsフロントエンド開発',
              'メタバース体験設計',
              'トークノミクス設計',
            ]
          : [
              'NFT collection planning & development',
              'DApps frontend development',
              'Metaverse experience design',
              'Tokenomics design',
            ],
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
      features:
        params.lang === 'ja'
          ? [
              'ブロックチェーン技術導入支援',
              'Web3.0戦略立案',
              'プロジェクト技術選定',
              '開発チーム育成',
            ]
          : [
              'Blockchain technology adoption support',
              'Web3.0 strategy planning',
              'Project technology selection',
              'Development team training',
            ],
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
      features:
        params.lang === 'ja'
          ? [
              '機械学習モデル開発',
              'データ分析・予測システム',
              'AI統合ソリューション',
              'カスタムAIツール開発',
            ]
          : [
              'Machine learning model development',
              'Data analysis & prediction systems',
              'AI integration solutions',
              'Custom AI tool development',
            ],
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

  const principlesTitle = params.lang === 'ja' ? '進め方' : 'Our approach';
  const principles = params.lang === 'ja'
    ? ['小さく始めて確実に検証', '設計から運用まで一貫サポート', '共有しやすいドキュメント']
    : ['Start small, validate quickly.', 'Support from design through operation.', 'Documentation that stays shared.'];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            {t.services.title}
          </h1>
          <p className={styles.subtitle}>{t.services.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
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
              <ul className={styles.featureList}>
                {featuredService.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
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
                <ul className={styles.featureList}>
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
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
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <Card glass className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              {params.lang === 'ja'
                ? 'サービスについてご相談ください'
                : 'Discuss our services'}
            </h2>
            <p className={styles.ctaDescription}>
              {params.lang === 'ja'
                ? 'お客様のプロジェクトに最適なソリューションをご提案します。'
                : 'We will propose the best solution for your project.'}
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
