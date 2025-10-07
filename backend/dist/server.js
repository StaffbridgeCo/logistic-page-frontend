"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./config/index"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const app = (0, express_1.default)();
// Parse JSON
app.use(express_1.default.json());
// CORS
app.use((0, cors_1.default)({
    origin: index_1.default.frontendUrl, // https://staffbridge.co
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
app.listen(index_1.default.port, () => {
    console.log(`🚀 Server running on port ${index_1.default.port}`);
});
//# sourceMappingURL=server.js.map