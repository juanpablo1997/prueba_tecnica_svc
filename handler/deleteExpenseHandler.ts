import { Request, Response } from "express";
import { DeleteExpenseService } from "../services/deleteExpenseService";

const deleteExpenseService = new DeleteExpenseService();

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteExpenseService.deleteExpense(Number(id));
    return res.status(204).send();
  } catch (error) {
    if (error) {
      return res.status(404).json({ error: "Expense not found" });
    }
    console.error("Error deleting expense:", error);
    return res.status(500).json({ error: "Error deleting expense" });
  }
};
