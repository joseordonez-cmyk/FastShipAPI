
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
const rutasEnvios = require('./routes/envios');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar con MongoDB
conectarDB();

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API REST de FastShip'
    });
});

// Rutas de envíos
app.use('/api/envios', rutasEnvios);

// Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
