import { Request, Response } from "express";
import { ExpenseDto } from "../dto/expenseDto";
import { CreateExpenseService } from "../services/createExpenseService";

const createExpenseService = new CreateExpenseService();

export const createExpenseHandler = async (req: Request, res: Response) => {
  try {
    const { amount, category, date, description }: ExpenseDto = req.body;
    const newExpense = await createExpenseService.createExpense({
      amount,
      category,
      date,
      description,
    });
    return res.status(201).json(newExpense);
  } catch (error) {
    console.error("Error creating expense:", error);
    return res.status(500).json({ error: error });
  }
};
