import express, { Application } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
import { userRouters } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

// routers
app.use('/api/v1/students', studentRouter);

app.use('/api/v1/users', userRouters);

app.use(globalErrorHandler);

// Not found route
app.use(notFound);
export default app;
