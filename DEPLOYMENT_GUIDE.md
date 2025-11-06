# 部署指南

## 🎉 问题已修复

之前遇到的"黑屏"问题已经解决！

### 问题原因

访问根路径 (`/`) 时没有对应的 `index.html`，导致显示 404 页面。

### 解决方案

1. **添加根路径重定向页面** (`public/index.html`)
   - 使用 JavaScript 自动重定向到 `/ja/`
   - 包含 noscript 备用方案
   - 显示加载动画

2. **添加 Cloudflare Pages 重定向规则** (`public/_redirects`)
   - 原生重定向支持
   - 更快速且 SEO 友好

3. **创建自定义 404 页面**
   - 使用网站主题样式
   - 提供导航选项
   - 双语支持

## 🚀 部署到 Cloudflare Pages

### 步骤 1: 合并代码

1. 创建 Pull Request 或直接合并到主分支
2. 或者直接在 Cloudflare Pages 中指向此分支

### 步骤 2: 配置 Cloudflare Pages

登录 Cloudflare Dashboard，配置以下设置：

#### 构建设置
```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
Node.js version: 18
```

#### 环境变量（可选）
如果使用 SendGrid 发送邮件：
```
SENDGARE_API_KEY = your_sendgrid_api_key
```

### 步骤 3: 部署

1. 点击 "Save and Deploy"
2. 等待构建完成（约 2-3 分钟）
3. 访问你的域名测试

## ✅ 测试清单

部署后，请测试以下功能：

### 根路径重定向
- [ ] 访问 `https://www.nebulainfinity.com/` → 自动重定向到 `/ja/`
- [ ] 显示日语首页

### 所有页面
- [ ] `/ja/` - 日语首页
- [ ] `/en/` - 英语首页
- [ ] `/ja/about` - 关于我们
- [ ] `/ja/services` - 服务
- [ ] `/ja/projects` - 项目列表
- [ ] `/ja/projects/decentralized-nft-marketplace` - 项目详情
- [ ] `/ja/contact` - 联系表单

### 语言切换
- [ ] 点击右上角 "EN" 按钮切换到英语
- [ ] 点击右上角 "JA" 按钮切换到日语
- [ ] URL 正确更新

### 404 页面
- [ ] 访问不存在的页面显示自定义 404
- [ ] 404 页面有网站主题样式
- [ ] 可以点击按钮返回首页

### 响应式设计
- [ ] 在手机上打开网站
- [ ] 导航菜单变为汉堡菜单
- [ ] 所有内容正确显示

### 联系表单
- [ ] 填写并提交表单
- [ ] 显示成功/错误消息
- [ ] （如果配置了邮件）收到通知邮件

## 🔧 本地测试

如果想在部署前本地测试：

### 方法 1: 使用开发服务器
```bash
npm run dev
```
访问 http://localhost:3000/ja/

### 方法 2: 测试生产构建
```bash
# 构建
npm run build

# 使用简单的 HTTP 服务器
npx serve out

# 访问 http://localhost:3000/
```

## 📊 预期结果

### 访问根路径 (/)
1. 看到"Nebula Infinity"加载页面（约 0.5 秒）
2. 自动重定向到 `/ja/`
3. 显示日语首页

### 首页应该显示
- ✅ 固定顶部导航栏（黑色半透明背景）
- ✅ Hero 区域（大标题 + 背景图）
- ✅ 4 个服务卡片（玻璃拟态效果）
- ✅ 项目预览区域
- ✅ CTA 号召行动区域
- ✅ 页脚（链接和社交媒体）

### 视觉效果
- ✅ 暗黑主题（黑色背景）
- ✅ 青色到紫色的渐变色
- ✅ 玻璃拟态卡片效果
- ✅ 平滑的悬停动画
- ✅ Logo 发光效果

## 🐛 故障排除

### 问题 1: 仍然显示黑屏

**检查项**:
1. 确认代码已正确推送到 GitHub
2. 确认 Cloudflare Pages 构建成功
3. 检查浏览器控制台是否有错误
4. 清除浏览器缓存并刷新

**解决方案**:
```bash
# 清除浏览器缓存
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

### 问题 2: 样式没有加载

**检查项**:
1. 查看浏览器开发者工具 → Network 标签
2. 确认 CSS 文件正确加载
3. 检查是否有 CORS 错误

**解决方案**:
- 确保构建输出目录设置为 `out`
- 检查 Cloudflare Pages 构建日志

### 问题 3: 重定向不工作

**检查项**:
1. 确认 `_redirects` 文件在 `out` 目录中
2. 查看 Cloudflare Pages Functions 日志

**解决方案**:
```bash
# 手动检查构建输出
ls -la out/
cat out/_redirects
```

### 问题 4: 404 页面没有样式

**原因**: CSS 文件路径可能不正确

**解决方案**:
- 404 页面现在是自定义的，应该有完整的样式
- 如果仍有问题，检查浏览器控制台

## 📞 获取帮助

如果遇到其他问题：

1. 检查 Cloudflare Pages 构建日志
2. 查看浏览器开发者工具控制台
3. 参考 README.md 中的详细说明
4. 查看 CLOUDFLARE_EMAIL_SETUP.md 配置邮件

## 🎯 成功指标

部署成功的标志：

✅ 访问根路径自动跳转到日语首页
✅ 所有页面正确显示
✅ 语言切换功能正常
✅ 移动端响应式正常
✅ 404 页面样式正确
✅ 表单可以提交（即使邮件未配置也应显示成功消息）

---

**祝你部署顺利！** 🚀

如有任何问题，请随时查阅文档或寻求帮助。
