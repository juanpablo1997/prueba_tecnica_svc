import { Sequelize, Dialect } from "sequelize";
import dotenv from "dotenv";
import { initExpense } from "./expense";

dotenv.config();
const config = require('../../config/config.js')
const env = 'development'

// Configuración de la base de datos
const dbConfig = ( config as any ) [env];
console.log(dbConfig)

// Inicialización de Sequelize
export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    ...dbConfig,
    logging: false,
  }
);

export const initSequelize = () => {
  initExpense(sequelize);
};

export default { sequelize, Sequelize, dbConfig }