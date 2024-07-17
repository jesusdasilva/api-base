// Importar Express con sintaxis ES6
import express from 'express';

// Crear una nueva aplicación Express
const app = express();

// Definir el puerto en el que se ejecutará el servidor
const PORT = 3000;

// Crear un endpoint que responda con "Hola API" en formato JSON
app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola API Base' });
});

// Iniciar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el Puerto:${PORT}`);
});