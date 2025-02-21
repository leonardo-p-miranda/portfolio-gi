// server/api/contact.ts
import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validação básica (opcional)
  if (!body.name || !body.phone || !body.email || !body.message) {
    event.res.statusCode = 400
    return { success: false, error: 'Campos obrigatórios ausentes' }
  }

  // Configuração do transportador do nodemailer usando variáveis de ambiente
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: Number(process.env.SMTP_PORT), // 465 ou 587
    secure: process.env.SMTP_SECURE === 'true', // true para 465, false para 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  // Opções do e-mail
  const mailOptions = {
    from: `"Site Contato" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL, // e-mail que receberá as mensagens
    subject: `Novo contato de ${body.name}`,
    text: `
Você recebeu uma nova mensagem do formulário de contato:

Nome: ${body.name}
Telefone: ${body.phone}
Email: ${body.email}
Mensagem: ${body.message}
    `,
    html: `
      <p>Você recebeu uma nova mensagem do formulário de contato:</p>
      <ul>
        <li><strong>Nome:</strong> ${body.name}</li>
        <li><strong>Telefone:</strong> ${body.phone}</li>
        <li><strong>Email:</strong> ${body.email}</li>
        <li><strong>Mensagem:</strong> ${body.message}</li>
      </ul>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    event.res.statusCode = 500
    return { success: false, error: 'Falha ao enviar e-mail' }
  }
})
