// 支持的语言
export const languages = ['ja', 'en'] as const;
export type Language = typeof languages[number];

// 默认语言
export const defaultLanguage: Language = 'ja';

// 语言名称
export const languageNames: Record<Language, string> = {
  ja: '日本語',
  en: 'English',
};

// 验证语言是否有效
export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

// 获取语言（带回退）
export function getLanguage(lang: string): Language {
  return isValidLanguage(lang) ? lang : defaultLanguage;
}

// 获取翻译文本
export function getTranslation(translations: any, lang: Language) {
  return translations[lang] || translations[defaultLanguage];
}
