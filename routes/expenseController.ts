import express from "express";
import { addExpenseHandler } from "../handler/createExpenseHandler";
import { deleteExpenseHandler } from "../handler/deleteExpenseHandler";
import { updateExpenseHandler } from "../handler/updateExpenseHandler";
import { getAllExpensesHandler } from "../handler/getAllExpensesHandler";
import { getExpenseByIdHandler } from "../handler/getExpenseByIdHandler";
import { validateParams, body } from "../middleware/validateParams";

const router = express.Router()

// Ruta para obtener todos los gastos
.get("/", getAllExpensesHandler)

// Ruta para obtener un gasto por ID
.get("/:id", getExpenseByIdHandler)

// Ruta para agregar un nuevo gasto
.post("/", addExpenseHandler)

// Ruta para actualizar un gasto
.put("/:id", updateExpenseHandler)

// Ruta para eliminar un gasto por ID
.delete("/:id", deleteExpenseHandler);

export default router;
