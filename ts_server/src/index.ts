import express from "express";
import type { Request, Response } from "express";
// import router from "./routes";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
