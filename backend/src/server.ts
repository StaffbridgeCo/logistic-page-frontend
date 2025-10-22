// backend/src/server.ts
import express from "express";
import cors from "cors";
import path from "path";
import config from "./config/index";  
import contactRoutes from "./routes/contactRoutes";

const app = express();

// Parse JSON
app.use(express.json());

// 🌐 Configuración de CORS para producción y desarrollo
const allowedOrigins: (string | RegExp)[] = [config.frontendUrl]; // producción

// Permitir cualquier localhost en desarrollo
if (process.env.NODE_ENV !== "production") {
  allowedOrigins.push(/localhost:\d+/); // acepta localhost:5173, 3000, etc.
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Solicitudes sin origin (Postman, curl) siempre permitidas
      if (!origin) return callback(null, true);

      // Permitir si el origin coincide con algún allowedOrigins
      const allowed = allowedOrigins.some(o =>
        o instanceof RegExp ? o.test(origin) : o === origin
      );

      if (allowed) return callback(null, true);

      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

// Rutas de API
app.use("/api", contactRoutes);

// Servir frontend estático
const frontendDistPath = path.resolve(__dirname, "../frontend/dist");
app.use(express.static(frontendDistPath));

// 🔹 Catch-all solo para rutas que NO sean /api
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(frontendDistPath, "index.html"));
});

// Iniciar servidor
app.listen(config.port, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${config.port}`);
});
