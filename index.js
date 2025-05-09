import express from 'express';
import userRoutes from './src/routes/user.route.js';

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
