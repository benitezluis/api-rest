import { Router } from 'express';
import ClientesController from '../controllers/clientes';

const router = Router();
const clientes = new ClientesController();

router.get('/clientes', (req, res) => {
  clientes.leer(req, res);
});

router.post('/cliente', (req, res) => {
  clientes.guardar(req, res);
});

router.put('/cliente/:id', (req, res) => {
  clientes.actualizar(req, res);
});

router.delete('/cliente/:id', (req, res) => {
  clientes.eliminar(req, res);
});

export default router;
