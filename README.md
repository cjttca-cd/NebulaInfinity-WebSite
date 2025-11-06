# Nebula Infinity Website

现代化的 Web3.0 企业官网，采用 Next.js 构建，支持静态导出和 Cloudflare Pages 部署。

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: CSS Modules + CSS Variables
- **部署**: Cloudflare Pages
- **国际化**: 路由级别（日语/英语）

## 📦 项目结构

```
nebulainfinity-website/
├── app/                    # Next.js App Router
│   ├── [lang]/            # 动态语言路由
│   │   ├── page.tsx       # 首页
│   │   ├── about/         # 关于我们
│   │   ├── services/      # 服务详情
│   │   ├── projects/      # 项目展示
│   │   └── contact/       # 联系我们
│   └── sitemap.ts         # Sitemap 生成器
├── components/            # React 组件
│   ├── layout/           # 布局组件
│   ├── ui/               # UI 组件库
│   └── seo/              # SEO 组件
├── data/                 # 静态数据
│   ├── projects/         # 项目数据
│   └── translations/     # 翻译文件
├── functions/            # Cloudflare Functions
│   └── api/contact.ts    # 表单处理
├── public/               # 静态资源
├── styles/               # 全局样式
└── lib/                  # 工具函数
```

## 🛠️ 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000/ja 查看网站。

### 构建生产版本

```bash
npm run build
```

构建输出将在 `out/` 目录中。

## 🌐 Cloudflare Pages 部署

### 部署设置

1. **构建命令**: `npm run build`
2. **构建输出目录**: `out`
3. **Node.js 版本**: 18.x 或更高

### Cloudflare Pages 配置

在 Cloudflare Pages 控制台中设置：

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `/out`
- **Root directory**: `/`
- **Node version**: 18

### 环境变量（可选）

如果使用邮件发送服务（如 SendGrid），需要配置以下环境变量：

- `SENDGRID_API_KEY`: SendGrid API 密钥

## 📧 配置联系表单邮件发送

联系表单使用 Cloudflare Functions 处理。要启用邮件发送功能：

### 方式 1: 使用 Cloudflare Email Workers（推荐）

1. 在 Cloudflare 中设置 Email Routing
2. 配置 Email Workers 将表单提交转发到 info@nebulainfinity.com
3. 参考：https://developers.cloudflare.com/email-routing/email-workers/

### 方式 2: 使用 SendGrid

1. 在 SendGrid 注册并获取 API 密钥
2. 在 Cloudflare Pages 设置中添加环境变量 `SENDGRID_API_KEY`
3. 更新 `functions/api/contact.ts` 中的邮件发送代码（已有注释示例）

### 测试表单功能

部署后，访问 `/ja/contact` 或 `/en/contact` 测试表单提交。

## 🎨 设计系统

网站采用 Vercel/Linear 风格的现代设计系统：

- **主题**: 暗黑模式
- **主色调**: 青色 (#2DD4BF) + 紫色渐变
- **效果**: 玻璃拟态、渐变、微妙动画
- **响应式**: 完全适配移动端

## 📝 内容更新

### 添加新项目

1. 在 `data/projects/projects.json` 中添加项目基本信息
2. 创建 `data/projects/[project-slug].json` 添加详细信息
3. 准备项目图片并放入 `public/images/projects/`
4. 重新构建并部署

### 更新翻译

编辑以下文件：
- `data/translations/ja.json` (日语)
- `data/translations/en.json` (英语)

## 🔍 SEO 优化

网站已实现完整的 SEO 优化：

- ✅ Meta 标签（标题、描述、关键词）
- ✅ Open Graph 标签（Facebook、LinkedIn）
- ✅ Twitter Card 标签
- ✅ JSON-LD 结构化数据
- ✅ Sitemap.xml 自动生成
- ✅ Robots.txt
- ✅ 多语言支持（hreflang）
- ✅ Canonical URLs

## 📱 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 移动端浏览器

## 🤝 贡献

这是 Nebula Infinity 的私有项目。

## 📄 许可证

© 2024 Nebula Infinity. All rights reserved.
