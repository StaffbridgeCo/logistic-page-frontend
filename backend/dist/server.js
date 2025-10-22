"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./config/index"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const app = (0, express_1.default)();
// Parse JSON
app.use(express_1.default.json());
// 🌐 Configuración de CORS para producción y desarrollo
const allowedOrigins = [index_1.default.frontendUrl]; // producción
// Permitir cualquier localhost en desarrollo
if (process.env.NODE_ENV !== "production") {
    allowedOrigins.push(/localhost:\d+/); // acepta localhost:5173, 3000, etc.
}
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Solicitudes sin origin (Postman, curl) siempre permitidas
        if (!origin)
            return callback(null, true);
        // Permitir si el origin coincide con algún allowedOrigins
        const allowed = allowedOrigins.some(o => o instanceof RegExp ? o.test(origin) : o === origin);
        if (allowed)
            return callback(null, true);
        callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
}));
// Rutas de API
app.use("/api", contactRoutes_1.default);
// Servir frontend estático
const frontendDistPath = path_1.default.resolve(__dirname, "../frontend/dist");
app.use(express_1.default.static(frontendDistPath));
// 🔹 Catch-all solo para rutas que NO sean /api
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path_1.default.join(frontendDistPath, "index.html"));
});
// Iniciar servidor
app.listen(index_1.default.port, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://0.0.0.0:${index_1.default.port}`);
});
//# sourceMappingURL=server.js.map