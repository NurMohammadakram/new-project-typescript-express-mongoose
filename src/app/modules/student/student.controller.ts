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

export const studentControllers = {
  createStudent,
};
