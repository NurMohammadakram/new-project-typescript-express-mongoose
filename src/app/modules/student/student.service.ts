import { IStudent } from './student.interface';
import { StudentModel } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find({});
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const updateStudentIntoDB = async (id: string, data: IStudent) => {
  const result = await StudentModel.updateOne({ id }, data);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  deleteStudentFromDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
};
