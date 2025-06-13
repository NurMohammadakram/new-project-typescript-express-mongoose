import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

// routers
app.use('/api/v1', router);

//global errors
app.use(globalErrorHandler);

// Not found route
app.use(notFound);
export default app;
