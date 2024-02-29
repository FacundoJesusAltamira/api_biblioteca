// usuarioModel.js
const mongoose = require("mongoose");

// Define the user schema
const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Other fields for the user model
  // ...
}, { collection: 'usuarios' });

// Create a User model from the schema
const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;