import express, { ErrorRequestHandler } from "express";
import expenseController from "./routes/expenseController";
import { initSequelize } from "./models/index";
import cors from 'cors'; // Importa cors aquí

// Inicializa la conexión con Sequelize
initSequelize();

const app = express();

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors()); // Corrige aquí

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/expenses", expenseController);

// Manejo de errores
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const responseStatus = err.response?.status || err.status || 500;
  res.status(responseStatus).send({
    message: err.message,
  });
};

app.use(errorHandler);

export default app;
