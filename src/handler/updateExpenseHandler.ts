import { Request, Response } from "express";
import { updateExpense } from "../services/expenseService";
import { ExpenseDto } from "../dto/expenseDto";

export const updateExpenseHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const updatedData: Partial<ExpenseDto> = req.body;

  // Validación básica de DTO
  if (
    updatedData.amount === undefined &&
    updatedData.category === undefined &&
    updatedData.date === undefined
  ) {
    res
      .status(400)
      .send({
        error:
          "Al menos uno de los campos amount, category o date debe ser proporcionado.",
      });
  }

  try {
    const updatedExpense = await updateExpense(Number(id), updatedData);

    if (!updatedExpense) {
      res.status(404).send({ error: "Gasto no encontrado." });
    }

    res.status(200).send(updatedExpense);
  } catch (error) {
    res.status(400).send({ error });
  }
};
