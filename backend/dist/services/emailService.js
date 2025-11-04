"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = sendContactEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
async function sendContactEmail(payload) {
    // 👇 AGREGA ESTE BLOQUE PARA VERIFICAR QUE .env SE CARGA BIEN
    console.log("📬 SMTP CONFIG CHECK:", {
        host: config_1.default.smtp.host,
        port: config_1.default.smtp.port,
        user: config_1.default.smtp.user,
        hasPass: !!config_1.default.smtp.pass,
        from: config_1.default.fromEmail,
        to: config_1.default.toEmail,
    });
    const transporter = nodemailer_1.default.createTransport({
        host: config_1.default.smtp.host,
        port: Number(config_1.default.smtp.port),
        secure: false, // 👈 usar false con puerto 587 (STARTTLS)
        auth: {
            user: config_1.default.smtp.user,
            pass: config_1.default.smtp.pass,
        },
        tls: {
            rejectUnauthorized: false, // evita errores de certificado locales
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
        from: `"StaffBridge Site" <${config_1.default.fromEmail}>`,
        to: config_1.default.toEmail,
        subject: `New contact from ${payload.name} (${payload.company ?? "No company"})`,
        html,
        replyTo: payload.email,
    });
    return info;
}
//# sourceMappingURL=emailService.js.map