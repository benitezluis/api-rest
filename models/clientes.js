import mongoose, { Schema } from 'mongoose';

const schemaClientes = new Schema({
  nombre:       { type: String },
  rfc:          { type: String },
  direccion:    {
    calle:        { type: String },
    colonia:      { type: String },
    codigoPostal: { type: String },
    numero:       { type: String }
  },
  telefono:       { type: String },
  correo:         { type: String },
  sexo:           { type: String, enum: ['MASCULINO', 'FEMENINO'] },
  empresa:        { type: Schema.ObjectId, ref: 'empresas', default: null },

  creado:         { type: Date, default: Date.now() }
});

export default mongoose.model('clientes', schemaClientes);
