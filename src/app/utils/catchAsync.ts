import { RequestHandler, Request, Response, NextFunction } from 'express';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(error => next(error));
  }
}

export default catchAsync;