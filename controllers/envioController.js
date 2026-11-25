
const Envio = require('../models/Envio');

// Registrar un nuevo envío
const crearEnvio = async (req, res) => {
    try {
        const nuevoEnvio = new Envio(req.body);
        const envioGuardado = await nuevoEnvio.save();

        res.status(201).json({
            mensaje: 'Envío registrado correctamente',
            envio: envioGuardado
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al registrar el envío',
            error: error.message
        });
    }
};

// Listar todos los envíos
const listarEnvios = async (req, res) => {
    try {
        const envios = await Envio.find();

        res.json(envios);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al consultar los envíos',
            error: error.message
        });
    }
};

// Buscar un envío por su ID
const obtenerEnvio = async (req, res) => {
    try {
        const envio = await Envio.findById(req.params.id);

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.json(envio);
    } catch (error) {
        res.status(400).json({
            mensaje: 'ID inválido',
            error: error.message
        });
    }
};

// Actualizar un envío
const actualizarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.json({
            mensaje: 'Envío actualizado correctamente',
            envio
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar el envío',
            error: error.message
        });
    }
};

// Eliminar un envío
const eliminarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndDelete(req.params.id);

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.json({
            mensaje: 'Envío eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar el envío',
            error: error.message
        });
    }
};

// Listar envíos pendientes o en tránsito
const listarEnviosActivos = async (req, res) => {
    try {
        const envios = await Envio.find({
            estado: { $in: ['pendiente', 'en tránsito'] }
        });

        res.json(envios);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al consultar envíos activos',
            error: error.message
        });
    }
};

// Actualizar el estado de un envío
const actualizarEstado = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndUpdate(
            req.params.id,
            { estado: req.body.estado },
            { new: true, runValidators: true }
        );

        if (!envio) {
            return res.status(404).json({
                mensaje: 'Envío no encontrado'
            });
        }

        res.json({
            mensaje: 'Estado actualizado correctamente',
            envio
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al actualizar el estado',
            error: error.message
        });
    }
};

module.exports = {
    crearEnvio,
    listarEnvios,
    obtenerEnvio,
    actualizarEnvio,
    eliminarEnvio,
    listarEnviosActivos,
    actualizarEstado
};
