import { Request, Response } from "express";
import { GetAllExpenseService } from "../services/getAllExpenseService";

const getAllExpenseService = new GetAllExpenseService();

export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await getAllExpenseService.getAllExpenses();
    return res.status(200).json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return res.status(500).json({ error: "Error fetching expenses" });
  }
};
