import { Expense } from "../models/expense";

export class GetAllExpenseService {
  async getAllExpenses() {
    const expenses = await Expense.findAll();
    return expenses;
  }
}
