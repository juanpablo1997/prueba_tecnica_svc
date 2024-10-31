import { Request, Response } from 'express';
import { deleteExpense } from '../services/expenseService';

export const deleteExpenseHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await deleteExpense(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: 'Error al eliminar el gasto.' });
  }
};
