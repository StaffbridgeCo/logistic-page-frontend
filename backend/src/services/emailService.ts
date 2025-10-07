import nodemailer from "nodemailer";
import config from "../config";

export async function sendContactEmail(payload: { name: string; email: string; company?: string; message?: string; }) {
const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: true, // Gmail con 465 siempre requiere secure true
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});


  const html = `
    <h2>New contact from StaffBridge site</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company ?? "-"}</p>
    <p><strong>Message:</strong><br/>${payload.message ?? "-"}</p>
  `;

  const info = await transporter.sendMail({
    from: `"StaffBridge Site" <${config.fromEmail}>`,
    to: config.toEmail,
    subject: `New contact from ${payload.name} (${payload.company ?? "No company"})`,
    html,
    replyTo: payload.email
  });

  return info;
}
