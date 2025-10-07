import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 4000,
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
