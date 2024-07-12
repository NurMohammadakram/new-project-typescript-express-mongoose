import { Request, Response } from 'express';
import { userServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    const data = await userServices.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const userControllers = {
  createStudent,
};
