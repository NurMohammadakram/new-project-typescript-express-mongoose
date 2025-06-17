import config from '../../config';
import { IStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { Iuser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: IStudent) => {
  const userData: Partial<Iuser> = {};
  
  userData.id = '2030100006';
  userData.password = password || config.default_password;
  userData.role = 'student';
  const newUser = await UserModel.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
