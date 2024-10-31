import app from "./app";

app.listen(8080, () => {
  console.log("Expense Service listening 8080");
});
process.on("unhandledRejection", async (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exitCode = 1;
});

process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception", err);
  process.exitCode = 1;
});

process.on('exit', () => {
    console.error('Logging an exit')
  })