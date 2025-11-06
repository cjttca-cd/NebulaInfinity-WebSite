import { MetadataRoute } from 'next';
import projectsData from '@/data/projects/projects.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nebulainfinity.com';
  const languages = ['ja', 'en'];

  const staticPages = ['', '/about', '/services', '/projects', '/contact'];

  // 生成静态页面的 sitemap 条目
  const staticEntries = languages.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1.0 : 0.8,
    }))
  );

  // 生成项目详情页的 sitemap 条目
  const projectEntries = languages.flatMap((lang) =>
    projectsData.projects.map((project) => ({
      url: `${baseUrl}/${lang}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...projectEntries];
}
