import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hola API Base' });
});

export default app;
