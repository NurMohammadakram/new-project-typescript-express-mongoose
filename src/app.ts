import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
import { userRouters } from './app/modules/user/user.route';

const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

// routers
app.use('/api/v1/students', studentRouter);

app.use('/api/v1/users', userRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, all setup done!');
});

export default app;
