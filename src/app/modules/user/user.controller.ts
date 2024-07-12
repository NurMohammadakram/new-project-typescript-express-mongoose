import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const data = await userServices.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
