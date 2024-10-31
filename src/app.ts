import express, { ErrorRequestHandler } from "express"
import expenseController from "./routes/expenseController"
import { initSequelize } from "./models/index"

initSequelize()

const app = express()
app.use(express.json())
app.use("/expenses", expenseController);
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const responseStatus = err.response?.status || err.status || 500

  res.status(responseStatus).send({
    message: err.message,
  })
}
app.use(errorHandler)

export default app;