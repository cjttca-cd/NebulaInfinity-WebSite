import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['ja', 'en'];
const defaultLocale = 'ja';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 跳过静态文件和 API 路由
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 检查路径是否已经包含语言前缀
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 重定向到默认语言
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了：
     * - _next/static (静态文件)
     * - _next/image (图片优化文件)
     * - favicon.ico (图标文件)
     * - public 文件夹中的文件 (.svg, .png, .jpg, .jpeg, .gif, .webp)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
