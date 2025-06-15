import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

interface IError {
  message?: string;
  stack?: string;
}

const globalErrorHandler = (
  error: IError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const message = error.message || 'something went wrong!';
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message,
    error,
  });
};
export default globalErrorHandler;
