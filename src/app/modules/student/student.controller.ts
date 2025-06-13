import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const getAllStudent = catchAsync(async (req, res) => {
    const result = await studentServices.getAllStudentFromDB();
    sendResponse(res, {message: 'Successfully retrieved all student data', data: result})
  
});

const getSingleStudent = catchAsync(async (req, res) => {
    const { studentId: id } = req.params;
    const result = await studentServices.getSingleStudentFromDB(id as string);
    sendResponse(res, {message: 'successfully retrieved the user.', data: result})
  
});

const updateStudent = catchAsync(async (req, res) => {
  const { studentId: id } = req.params;
  const data = req.body;
  const updateResult = await studentServices.updateStudentIntoDB(id, data);
  sendResponse(res, { message: 'successfully updated user', data: updateResult });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId: id } = req.params;
  const result = await studentServices.deleteStudentFromDB(id);
  sendResponse(res, { message: 'Your profile is deleted!', data: result });
});

export const studentControllers = {
  deleteStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
};
