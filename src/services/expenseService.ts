// src/services/expenseService.ts

import * as expenseRepository from '../repositories/expenseRepository';
import { Expense } from '../models/expense';
import { ExpenseDto } from '../dto/expenseDto';
import { Optional } from 'sequelize';

// Define tipos para los atributos de creación y actualización
type ExpenseCreationAttributes = Optional<Expense, 'id' | 'createdAt' | 'updatedAt'>;
type PartialExpenseAttributes = Partial<ExpenseCreationAttributes>;

// Servicio para obtener todos los gastos
export const getAllExpenses = async (): Promise<Expense[]> => {
  return await expenseRepository.getAllExpenses();
};

// Servicio para obtener un gasto por su ID
export const getExpenseById = async (id: number): Promise<Expense | null> => {
  return await expenseRepository.getExpenseById(id);
};

// Servicio para agregar un nuevo gasto
export const addExpense = async (expenseData: ExpenseDto): Promise<Expense> => {
  return await expenseRepository.addExpense({amount: expenseData.amount, category: expenseData.category, date: expenseData.date, description: expenseData.description ? expenseData.description : undefined});
};

// Servicio para eliminar un gasto por su ID
export const deleteExpense = async (id: number): Promise<void> => {
  await expenseRepository.deleteExpense(id);
};

// Servicio para actualizar un gasto
export const updateExpense = async (id: number, updatedData: Partial<ExpenseDto>): Promise<Expense | null> => {
  const updatedExpenseData: PartialExpenseAttributes = {
    amount: updatedData.amount,
    category: updatedData.category,
    date: updatedData.date,
    description: updatedData.description, // La descripción es opcional
  };

  const [affectedCount, updatedExpenses] = await expenseRepository.updateExpense(id, updatedExpenseData);
  return affectedCount > 0 ? updatedExpenses[0] : null;
};
