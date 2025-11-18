require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const apiRoutes = require("./routes/api");
app.use("/api/v1", apiRoutes);


const { sequelize } = require('./config/database');

const ownersRoutes = require('./routes/owners');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: "API Veterinaria funcionando" });
});

app.use('/api/v1/owners', ownersRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log("Conectado a MySQL");
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor en http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error(err));
