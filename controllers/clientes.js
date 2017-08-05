import clientesModel from '../models/clientes';

export default class ClientesController {

  leer(req, res){
    
    clientesModel.find({}, (error, data) => {
      if(error){
        return res.status(500).json({ error });
      }
      else{
        return res.status(200).json({ data: data });
      }
    });
  }

  guardar(req, res){

    const nuevo = new clientesModel({
      nombre      : req.body.nombre,
      rfc         : req.body.rfc,
      direccion   : req.body.direccion,
      telefono    : req.body.telefono,
      correo      : req.body.correo,
      sexo        : req.body.sexo,
      empresa     : req.body.empresa
    });

    nuevo.save((error, data) => {
      if(error){
        return res.status(500).json({ error });
      }
      else{
        return res.status(201).json({ data: data });
      }
    });
  }

  actualizar(req, res){

    const actualizar = {
      nombre      : req.body.nombre,
      rfc         : req.body.rfc,
      direccion   : req.body.direccion,
      telefono    : req.body.telefono,
      correo      : req.body.correo,
      sexo        : req.body.sexo,
      empresa     : req.body.empresa
    };

    clientesModel.update({ _id: req.params.id }, actualizar, (error, data) => {
      if(error){
        return res.status(500).json({ error });
      }
      else{
        return res.status(201).json({ data: data });
      }
    });
  }

  eliminar(req, res){

    clientesModel.remove({ _id: req.params.id }, (error, data) => {
      if(error){
        return res.status(500).json({ error });
      }
      else{
        return res.status(203).json();
      }
    });
  }
}
