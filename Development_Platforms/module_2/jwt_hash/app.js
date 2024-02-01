import "dotenv/config";
import express from "express";
import cors from "cors";

import authRouter from "./routers/authRouter.js";
import dataRouter from "./routers/dataRouter.js";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/data", dataRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});