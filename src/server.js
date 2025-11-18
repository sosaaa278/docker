require("dotenv").config();
const express = require("express");
const apiRoutes = require("./routes/apiroutes.js");
const sequelize = require("./config/database.js");

const app = express();

app.use(express.json());

// Prefijo general para tus rutas
app.use("/api", apiRoutes);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Conexión a MySQL exitosa");

        await sequelize.sync();
        console.log("Tablas sincronizadas");

        app.listen(3000, () => {
            console.log("Servidor iniciado en http://localhost:3000");
        });
    } catch (error) {
        console.error("Database error:", error);
    }
}

startServer();
