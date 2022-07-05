const mongoose = require("mongoose");

const schema_cliente = new mongoose.Schema({
  nome_banco: { type: String },
  tipo_conta: { type: String },
  nome_titular: { type: String, unique: true },
  limite_cartao: { type: String },
  apikey: { type: String },
});
module.exports = mongoose.model("Cliente", schema_cliente);
