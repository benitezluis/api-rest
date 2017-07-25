import { Router } from 'express';

const router = Router();

router.get('/clientes', (req, res) => {
  return res.status(200).json({ message: 'Obtener clientes' });
});

router.post('/cliente', (req, res) => {
  return res.status(200).json({ message: 'Guardar cliente' });
});

router.put('/cliente/:id', (req, res) => {
  return res.status(200).json({ message: 'Actualizar cliente' });
});

router.delete('/cliente/:id', (req, res) => {
  return res.status(200).json({ message: 'Eliminar cliente' });
});

export default router;
