import { IStudent } from './student.interface';
import { StudentModel } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find()
  .populate('academicSemester')
  .populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty'
    }
});
  if (!result || result.length === 0) {
    throw new Error('No students found');
  }
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findById(id)
  .populate('academicSemester')
  .populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty'
    }
});
  if (!result) {
    throw new Error('Student not found');
  }
  return result;
};

const updateStudentIntoDB = async (id: string, data: IStudent) => {
  const result = await StudentModel.updateOne({ id }, data);
  if (result.modifiedCount === 0) {
    throw new Error('No student found with the given ID or no changes made');
  }
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  if (result.modifiedCount === 0) {
    throw new Error('No student found with the given ID or no changes made');
  }
  return result;
};

export const studentServices = {
  deleteStudentFromDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
};
