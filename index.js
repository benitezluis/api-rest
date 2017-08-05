'use strict'
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('');
});

mongoose.connect('mongodb://localhost:27017/myDB', { useMongoClient: true }, (error, res) => {
  if (error) throw error
  console.log('Conexión a la base de datos establecida...');

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  });
});
