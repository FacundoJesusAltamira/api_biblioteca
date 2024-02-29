// usuarioController.js

const Usuario = require("../models/usuarioModel");

// Controller function to get all usuarios
exports.getAllUsuarios = async (req, res) => {
    try {
      // Logic to retrieve all usuarios from the database
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Controller function to get a usuario by id
  exports.getUsuarioById = async (req, res) => {
    try {
      // Logic to retrieve a usuario by id from the database
      const usuario = await Usuario.findById(req.params.id);
      if (!usuario) {
        return res.status(404).json({ message: "Usuario not found" });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Controller function to create a new usuario
  exports.createUsuario = async (req, res) => {
    try {
      // Logic to create a new usuario in the database
      const newUsuario = await Usuario.create(req.body);
      res.status(201).json(newUsuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller function to update a usuario
  exports.updateUsuario = async (req, res) => {
    try {
      // Logic to update an existing usuario in the database
      const updatedUsuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUsuario) {
        return res.status(404).json({ message: "Usuario not found" });
      }
      res.json(updatedUsuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Controller function to delete a usuario
  exports.deleteUsuario = async (req, res) => {
    try {
      // Logic to delete an existing usuario from the database
      const deletedUsuario = await Usuario.findByIdAndDelete(req.params.id);
      if (!deletedUsuario) {
        return res.status(404).json({ message: "Usuario not found" });
      }
      res.json({ message: "Usuario deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };