import express from "express";
import cors from "cors";
import path from "path";
import config from "./config/index";  
import contactRoutes from "./routes/contactRoutes";

const app = express();

// Parse JSON
app.use(express.json());

// CORS
app.use(
  cors({
    origin: config.frontendUrl, // https://staffbridge.co
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
app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});
