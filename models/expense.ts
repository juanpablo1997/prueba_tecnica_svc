import { Sequelize, DataTypes } from "sequelize";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

// Definición del modelo de Gasto
export class Expense extends Model<
  InferAttributes<Expense>,
  InferCreationAttributes<Expense>
> {
  declare id: CreationOptional<number>; // ID auto-incrementable
  declare amount: number; // Monto del gasto
  declare category: string; // Categoría del gasto
  declare date: Date; // Fecha del gasto
  declare description?: string; // Descripción opcional del gasto

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

// Inicialización del modelo
export const initExpense = (sequelize: Sequelize) => {
  Expense.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, // Auto-incrementable
        primaryKey: true, // Clave primaria
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Valor por defecto para la fecha de creación
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Valor por defecto para la fecha de actualización
      },
    },
    {
      sequelize,
      tableName: "expenses", // Nombre de la tabla en la base de datos
    }
  );
};
