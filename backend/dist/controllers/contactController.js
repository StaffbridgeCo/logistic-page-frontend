"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postContact = postContact;
const validator_1 = require("../utils/validator");
const emailService_1 = require("../services/emailService");
async function postContact(req, res) {
    try {
        const body = req.body;
        const errors = (0, validator_1.validateContact)(body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
        await (0, emailService_1.sendContactEmail)(body);
        return res.status(200).json({ message: "✅ Email sent successfully" });
    }
    catch (err) {
        console.error("Contact error:", err);
        // Si es error de autenticación SMTP
        if (err.code === "EAUTH") {
            return res.status(500).json({ message: "SMTP Authentication failed. Check your username/password." });
        }
        // Si es error de conexión
        if (err.code === "ECONNECTION") {
            return res.status(500).json({ message: "SMTP Connection failed. Check your host/port." });
        }
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
}
//# sourceMappingURL=contactController.js.map