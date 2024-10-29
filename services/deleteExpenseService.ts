import { Expense } from "../models/expense";

export class DeleteExpenseService {
  async deleteExpense(id: number) {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      throw new Error("Expense not found");
    }
    await expense.destroy();
  }
}
