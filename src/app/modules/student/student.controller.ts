import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../middlewares/utils/sendResponse';

const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    sendResponse(res, {message: 'Successfully retrieved all student data', data: result})
  } catch (error) {
    next(error)
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId: id } = req.params;
    const result = await studentServices.getSingleStudentFromDB(id as string);
    sendResponse(res, {message: 'successfully retrieved the user.', data: result})
  } catch (error) {
    next(error)
  }
};

const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId: id } = req.params;
    const data = req.body;
    const updateResult = await studentServices.updateStudentIntoDB(id, data);
    sendResponse(res, {message: 'successfully updated user', data: updateResult})
  } catch (error) {
    next(error)
  }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId: id } = req.params;
    const result = await studentServices.deleteStudentFromDB(id);
    sendResponse(res, {message: 'Your profile is deleted!', data : result})
  } catch (error) {
    next(error)
  }
};

export const studentControllers = {
  deleteStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
};
