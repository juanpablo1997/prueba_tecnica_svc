import { Request, Response } from "express";
import { UpdateExpenseService } from "../services/updateExpenseService";
import { ExpenseDto } from "../dto/expenseDto";

const updateExpenseService = new UpdateExpenseService();

export const updateExpense = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { amount, category, date, description }: ExpenseDto = req.body;

    const updatedExpense = await updateExpenseService.updateExpense(
      Number(id),
      {
        amount,
        category,
        date,
        description,
      }
    );
    return res.status(200).json(updatedExpense);
  } catch (error) {
    if (error) {
      return res.status(404).json({ error: "Expense not found" });
    }
    console.error("Error updating expense:", error);
    return res.status(500).json({ error: "Error updating expense" });
  }
};
