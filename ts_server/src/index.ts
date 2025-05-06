import express, { Request, Response } from 'express';
import router from './routes'

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
