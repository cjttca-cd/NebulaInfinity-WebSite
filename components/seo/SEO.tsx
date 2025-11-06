import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  lang: 'ja' | 'en';
  path?: string;
  type?: 'website' | 'article';
  image?: string;
}

export function generateSEOMetadata({
  title,
  description,
  lang,
  path = '',
  type = 'website',
  image = '/images/logo.png',
}: SEOProps): Metadata {
  const baseUrl = 'https://www.nebulainfinity.com';
  const url = `${baseUrl}/${lang}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        ja: `${baseUrl}/ja${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Nebula Infinity',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      site: '@N_I_COM',
      creator: '@N_I_COM',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// JSON-LD 结构化数据
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nebula Infinity',
    url: 'https://www.nebulainfinity.com',
    logo: 'https://www.nebulainfinity.com/images/logo.png',
    description:
      'Web3.0とブロックチェーン技術の専門企業 / Specialized company in Web3.0 and blockchain technology',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@nebulainfinity.com',
      contactType: 'customer service',
    },
    sameAs: ['https://twitter.com/N_I_COM'],
  };
}

export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Nebula Infinity',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.nebulainfinity.com/images/logo.png',
      },
    },
  };
}
