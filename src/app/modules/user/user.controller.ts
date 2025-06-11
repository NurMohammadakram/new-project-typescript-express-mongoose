import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../middlewares/utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await userServices.createStudentIntoDB(password, studentData);
    sendResponse(res, {message: 'student created successfully',  data: result})
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
