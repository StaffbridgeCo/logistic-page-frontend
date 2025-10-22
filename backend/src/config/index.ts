//backend/src/config/index.ts
import dotenv from "dotenv";
dotenv.config();

const config = {
  port: Number(process.env.PORT) || 4000,  // ✅ convertir a number
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT || 587),
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || ""
  },
  fromEmail: process.env.FROM_EMAIL || "",
  toEmail: process.env.TO_EMAIL || "",
  frontendUrl: process.env.FRONTEND_URL || "*"
};


export default config;
