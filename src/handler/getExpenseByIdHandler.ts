import { Request, Response } from "express";
import { getExpenseById } from "../services/expenseService";

export const getExpenseByIdHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const expense = await getExpenseById(Number(id));

    if (!expense) {
      res.status(404).send({ error: "Gasto no encontrado." });
      return;
    }

    res.status(200).send(expense);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener el gasto." });
  }
};
