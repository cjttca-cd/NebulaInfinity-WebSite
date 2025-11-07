import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
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

  const services = [
    {
      icon: '🔗',
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
    },
    {
      icon: '🎨',
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
    },
    {
      icon: '💡',
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
    },
    {
      icon: '🤖',
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
    },
  ];

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
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Card key={index} hover>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={styles.feature}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
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
