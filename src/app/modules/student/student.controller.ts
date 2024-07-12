import { Request, Response } from 'express';
import { studentServices } from './student.service';

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all student data',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'can not get user at now. something wrong!',
      error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId: id } = req.params;
    const data = await studentServices.getSingleStudentFromDB(id as string);

    res.status(200).json({
      success: false,
      message: 'successfully retrieved the user.',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'can not get the user requested! something went wrong',
      error,
    });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const { studentId: id } = req.params;
    const data = req.body;
    const updateInfo = await studentServices.updateStudentIntoDB(id, data);

    res.status(200).json({
      success: true,
      message: 'successfully updated user',
      data: updateInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'can not update user info. something went wrong!',
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId: id } = req.params;
    const result = await studentServices.deleteStudentFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Your profile is deleted!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'could not delete user. something wrong',
      error,
    });
  }
};

export const studentControllers = {
  deleteStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
};
