import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    if (student) {
      const studentData = await studentServices.createStudentIntoDB(student);
      res.status(200).json({
        success: true,
        message: 'student created successfully',
        data: studentData,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const studentControllers = {
  createStudent,
};
