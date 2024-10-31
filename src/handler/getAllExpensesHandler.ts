import { Request, Response } from 'express';
import { getAllExpenses } from '../services/expenseService';

export const getAllExpensesHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const expenses = await getAllExpenses();
    res.status(200).send(expenses);
  } catch (error) {
    res.status(500).send({ error: 'Error al obtener los gastos.' });
  }
};
