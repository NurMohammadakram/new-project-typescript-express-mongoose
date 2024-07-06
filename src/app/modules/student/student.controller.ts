import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  const { student } = req.body;
  console.log('received student data input:  ', student);
  const result = await studentServices.createStudentIntoDB(student);
  res.status(200).json({
    success: true,
    message: 'student created successfully',
    data: result,
  });
};

export const studentControllers = {
  createStudent,
};
