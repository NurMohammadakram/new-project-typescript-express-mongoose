import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || httpStatus[500];
  const message = error.message || 'something went wrong!';

  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
export default globalErrorHandler;
