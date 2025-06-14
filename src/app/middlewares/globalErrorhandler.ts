import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = (
  error: any,
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
