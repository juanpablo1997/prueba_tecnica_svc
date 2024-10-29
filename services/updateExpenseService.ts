import { Expense } from "../models/expense";

export class UpdateExpenseService {
  async updateExpense(
    id: number,
    data: { amount: number; category: string; date: Date; description?: string }
  ) {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      throw new Error("Expense not found");
    }
    await expense.update(data);
    return expense;
  }
}
