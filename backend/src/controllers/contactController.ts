import { Request, Response } from "express";
import { ContactDto } from "../dtos/contactDto";
import { validateContact } from "../utils/validator";
import { sendContactEmail } from "../services/emailService";

export async function postContact(req: Request, res: Response) {
  try {
    const body = req.body as ContactDto;
    const errors = validateContact(body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await sendContactEmail(body);

    return res.status(200).json({ message: "✅ Email sent successfully" });
  } catch (err: any) {
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
