# Cloudflare Email Workers 设置指南

本指南将帮助你配置 Cloudflare Email Workers 来处理联系表单提交。

## 📋 前提条件

1. Cloudflare 账户
2. 已在 Cloudflare 管理的域名（nebulainfinity.com）
3. Cloudflare Pages 项目已部署

## 🔧 设置步骤

### 步骤 1: 启用 Email Routing

1. 登录 Cloudflare Dashboard
2. 选择域名 `nebulainfinity.com`
3. 进入 **Email** → **Email Routing**
4. 点击 **Enable Email Routing**
5. 添加目标邮箱地址：`info@nebulainfinity.com`

### 步骤 2: 配置 Email Workers

#### 方法 A: 使用 Cloudflare Email Workers（推荐）

1. 在 Email Routing 页面，点击 **Routes**
2. 创建新路由：
   - **Destination**: 自定义
   - **Action**: Send to Worker
3. 创建 Worker 来处理表单提交

#### 方法 B: 使用 SendGrid（备选方案）

如果不想使用 Email Workers，可以使用 SendGrid：

1. 注册 SendGrid 账号: https://sendgrid.com/
2. 创建 API Key（Settings → API Keys）
3. 在 Cloudflare Pages 项目设置中添加环境变量：
   - 变量名: `SENDGRID_API_KEY`
   - 值: 你的 SendGrid API Key

4. 更新 `functions/api/contact.ts` 文件，取消注释 SendGrid 相关代码：

```typescript
// 在 functions/api/contact.ts 中找到以下注释的代码并取消注释
await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${context.env.SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    personalizations: [{
      to: [{ email: 'info@nebulainfinity.com' }],
    }],
    from: { email: 'noreply@nebulainfinity.com' },
    subject: `New Contact Form Submission - ${formData.inquiryType}`,
    content: [{
      type: 'text/plain',
      value: emailContent,
    }],
  }),
});
```

5. 重新部署 Cloudflare Pages

### 步骤 3: 测试配置

1. 访问 https://www.nebulainfinity.com/ja/contact
2. 填写并提交表单
3. 检查 `info@nebulainfinity.com` 是否收到邮件

## 🎯 Email Workers 示例代码

如果选择使用 Email Workers，可以使用以下模板：

### email-worker.js

```javascript
export default {
  async email(message, env, ctx) {
    // 解析表单数据
    const formData = JSON.parse(message.headers.get('X-Form-Data') || '{}');

    // 转发邮件到目标地址
    await message.forward('info@nebulainfinity.com');

    return new Response('OK');
  }
};
```

## 🔐 安全建议

1. **环境变量**: 确保所有敏感信息（如 API 密钥）存储在环境变量中
2. **速率限制**: 考虑添加速率限制以防止滥用
3. **验证**: 在服务器端验证所有表单数据
4. **CAPTCHA**: 考虑添加 reCAPTCHA 防止垃圾邮件

## 📧 邮件模板

表单提交后发送的邮件格式：

```
主题: New Contact Form Submission - [询问类型]

━━━━━━━━━━━━━━━━━━━━━━━━━━━
新しいお問い合わせ / New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━━

お名前 / Name: [姓名]
会社名 / Company: [公司]
メール / Email: [邮箱]
電話番号 / Phone: [电话]
お問い合わせ種類 / Inquiry Type: [类型]

お問い合わせ内容 / Message:
[消息内容]

━━━━━━━━━━━━━━━━━━━━━━━━━━━
送信時刻 / Submitted: [时间戳]
言語 / Language: [ja/en]
━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 🐛 故障排除

### 问题: 表单提交成功但没收到邮件

**解决方案**:
1. 检查 Cloudflare Pages Functions 日志
2. 确认环境变量正确设置
3. 验证邮箱地址是否正确
4. 检查垃圾邮件文件夹

### 问题: CORS 错误

**解决方案**:
已在 `functions/api/contact.ts` 中配置 CORS 头，如果仍有问题，检查：
1. Cloudflare Pages 是否正确部署
2. Functions 是否正确编译

### 问题: 环境变量未生效

**解决方案**:
1. 在 Cloudflare Pages 设置中添加环境变量
2. 重新部署项目（环境变量更改需要重新部署）

## 📚 相关资源

- [Cloudflare Email Routing 文档](https://developers.cloudflare.com/email-routing/)
- [Cloudflare Email Workers 文档](https://developers.cloudflare.com/email-routing/email-workers/)
- [SendGrid API 文档](https://docs.sendgrid.com/api-reference/)
- [Cloudflare Pages Functions 文档](https://developers.cloudflare.com/pages/functions/)

## 💡 高级配置

### 添加自动回复

可以配置自动回复邮件给提交表单的用户：

```typescript
// 发送确认邮件给用户
await fetch('https://api.sendgrid.com/v3/mail/send', {
  // ... 发送确认邮件到 formData.email
});
```

### 集成 CRM

可以将表单数据自动发送到 CRM 系统：

```typescript
// 发送到 CRM API
await fetch('https://your-crm.com/api/contacts', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${env.CRM_API_KEY}` },
  body: JSON.stringify(formData),
});
```

## ✅ 完成清单

- [ ] 启用 Cloudflare Email Routing
- [ ] 配置目标邮箱地址
- [ ] 选择邮件发送方式（Email Workers 或 SendGrid）
- [ ] 配置相应的环境变量
- [ ] 更新 `functions/api/contact.ts` 代码
- [ ] 重新部署网站
- [ ] 测试表单提交
- [ ] 验证邮件接收

---

如有问题，请参考 Cloudflare 官方文档或联系技术支持。
