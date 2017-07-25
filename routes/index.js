import express, { Router } from 'express';
import Clientes from './clientes';

const app = express();

app.use(Clientes);

export default app;
