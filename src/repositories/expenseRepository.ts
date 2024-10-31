import { Expense } from '../models/expense';
import { CreationAttributes, Optional } from 'sequelize';

// Método para obtener todos los gastos
export const getAllExpenses = async (): Promise<Expense[]> => {
  return await Expense.findAll();
};

// Método para obtener un gasto por su ID
export const getExpenseById = async (id: number): Promise<Expense | null> => {
  return await Expense.findByPk(id);
};

// Método para agregar un nuevo gasto
export const addExpense = async (creationAttributes: Omit<CreationAttributes<Expense>, 'id'>): Promise<Expense> => {
  return await Expense.create(creationAttributes);
};

// Método para eliminar un gasto por su ID
export const deleteExpense = async (id: number): Promise<void> => {
  await Expense.destroy({ where: { id } });
};

// Método para actualizar un gasto
export const updateExpense = async (id: number, updatedData: Partial<Optional<Expense, 'id' | 'createdAt' | 'updatedAt'>>): Promise<[number, Expense[]]> => {
  return await Expense.update(updatedData, { where: { id }, returning: true });
};
