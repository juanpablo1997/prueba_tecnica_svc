import { NextFunction, Request, Response } from 'express';
import { addExpense } from '../services/expenseService';
import { ExpenseDto } from '../dto/expenseDto';

export const addExpenseHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const expenseData: ExpenseDto = req.body;

  // Validación básica de DTO
  if (!expenseData.amount || !expenseData.category || !expenseData.date) {
    res.status(400).send({ error: 'Los campos amount, category y date son obligatorios.' });
  }

  try {
    const newExpense = await addExpense(expenseData);
    res.status(201).send(newExpense);
  } catch (error) {
    next(error)
  }
};
