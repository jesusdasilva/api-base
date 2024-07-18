import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hola API Base ver. 2.0' });
});

export default app;
