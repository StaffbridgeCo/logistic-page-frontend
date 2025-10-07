"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
exports.default = config;
//# sourceMappingURL=index.js.map