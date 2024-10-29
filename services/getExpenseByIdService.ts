import { Expense } from "../models/expense";

export class GetExpenseByIdService {
  async getExpenseById(id: number) {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      throw new Error("Expense not found");
    }
    return expense;
  }
}
