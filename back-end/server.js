import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoutes from "./routes/userRouter.js";
import taskRoutes from "./routes/taskRouter.js";
import db from "./database/database.js";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "Servidor funcionando!",
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
