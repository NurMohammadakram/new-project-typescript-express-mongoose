import { Request, Response } from 'express';
import { studentServices } from './student.service';
// import studentSchemaJoi from './student.validation.joi';
import studentZodValidatonSchema from './student.validation.zod';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // Joi validation
    /* const { error, value } = studentSchemaJoi.validate(studentData);
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'error happend',
        error: error.details,
      });
    } */

    // Zod validation
    const validateStudent = studentZodValidatonSchema.parse(studentData);
    const data = await studentServices.createStudentIntoDB(validateStudent);
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

const getSingleStudent = async (req: Request, res: Request) => {
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
  createStudent,
  deleteStudent,
  getAllStudent,
  getSingleStudent,
};
