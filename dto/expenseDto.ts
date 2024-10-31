export interface ExpenseDto {
  amount: number;
  category: string;
  date: Date;
  description?: string; // La descripción es opcional
}