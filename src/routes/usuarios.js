// usuarios.js
const express = require("express");
const router = express.Router();

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

// Ruta para obtener todos los usuarios
router.get("/", getAllUsuarios);

// Ruta para obtener un usuario por id
router.get("/:id", getUsuarioById);

// Ruta para crear un nuevo usuario
router.post("/", createUsuario);

// Ruta para actualizar un usuario existente
router.put("/:id", updateUsuario);

// Ruta para eliminar un usuario
router.delete("/:id", deleteUsuario);

module.exports = router;