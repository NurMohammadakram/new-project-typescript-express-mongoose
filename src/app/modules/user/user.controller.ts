import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
    const { password, student: studentData } = req.body;
    const result = await userServices.createStudentIntoDB(password, studentData);
    sendResponse(res, {message: 'student created successfully',  data: result})
});

export const userControllers = {
  createStudent,
};
