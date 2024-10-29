import { Expense } from "../models/expense";
import { ExpenseDto } from "../dto/expenseDto";

export class CreateExpenseService {
  async createExpense(expenseData: ExpenseDto) {
    return await Expense.create(expenseData);
  }
}
