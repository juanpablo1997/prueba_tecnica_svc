import { Request, Response } from "express";
import { GetExpenseByIdService } from "../services/getExpenseByIdService";

const getExpenseByIdService = new GetExpenseByIdService();

export const getExpenseById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const expense = await getExpenseByIdService.getExpenseById(Number(id));
    return res.status(200).json(expense);
  } catch (error) {
    if (error) {
      return res.status(404).json({ error: "Expense not found" });
    }
    console.error("Error fetching expense:", error);
    return res.status(500).json({ error: "Error fetching expense" });
  }
};
