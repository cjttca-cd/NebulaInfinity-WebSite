// Cloudflare Pages Function for handling contact form submissions
interface Env {
  // 你可以在 Cloudflare Pages 设置中配置环境变量
}

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
  lang: string;
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  try {
    const formData: ContactFormData = await context.request.json();

    // 验证必填字段
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 构建邮件内容
    const emailContent = `
新しいお問い合わせ / New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━━

お名前 / Name: ${formData.name}
会社名 / Company: ${formData.company || 'N/A'}
メール / Email: ${formData.email}
電話番号 / Phone: ${formData.phone || 'N/A'}
お問い合わせ種類 / Inquiry Type: ${formData.inquiryType}

お問い合わせ内容 / Message:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
送信時刻 / Submitted: ${new Date().toISOString()}
言語 / Language: ${formData.lang}
`;

    // 使用 Cloudflare Email Workers 发送邮件
    // 注意：这需要在 Cloudflare 中配置 Email Workers
    // 参考：https://developers.cloudflare.com/email-routing/email-workers/

    // 暂时返回成功响应
    // 实际使用时，你需要配置 Email Workers 或使用 SendGrid 等第三方服务

    console.log('Contact form submission:', emailContent);

    // 这里应该实现实际的邮件发送逻辑
    // 可以使用 fetch 调用 SendGrid API 或其他邮件服务
    // 示例：
    // await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${context.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{
    //       to: [{ email: 'info@nebulainfinity.com' }],
    //     }],
    //     from: { email: 'noreply@nebulainfinity.com' },
    //     subject: 'New Contact Form Submission',
    //     content: [{
    //       type: 'text/plain',
    //       value: emailContent,
    //     }],
    //   }),
    // });

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// 处理 OPTIONS 请求（CORS）
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
