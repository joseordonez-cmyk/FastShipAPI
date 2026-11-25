
const express = require('express');
const router = express.Router();

const {
    crearEnvio,
    listarEnvios,
    obtenerEnvio,
    actualizarEnvio,
    eliminarEnvio,
    listarEnviosActivos,
    actualizarEstado
} = require('../controllers/envioController');

// Registrar un envío
router.post('/', crearEnvio);

// Listar todos los envíos
router.get('/', listarEnvios);

// Listar envíos activos
router.get('/activos', listarEnviosActivos);

// Actualizar estado de un envío
router.patch('/:id/estado', actualizarEstado);

// Buscar un envío por ID
router.get('/:id', obtenerEnvio);

// Actualizar un envío completo
router.put('/:id', actualizarEnvio);

// Eliminar un envío
router.delete('/:id', eliminarEnvio);

module.exports = router;
