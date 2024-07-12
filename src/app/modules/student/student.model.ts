import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import {
  IGuardian,
  ILocalGuardian,
  IStudent,
  IUserName,
} from './student.interface';
import config from '../../config';

export const userNameSchema = new Schema<IUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, optional: true },
  lastName: { type: String, required: true },
});

export const guardianSchema = new Schema<IGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

export const localGuardianSchema = new Schema<ILocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

export const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'validator failed for path `{PATH}` with value `{VALUE}`',
    },
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
  },
  permanentAddress: { type: String, required: true },
  presentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: { type: String },
  isDeleted: { type: String, default: false, optional: true },
});

studentSchema.pre('save', async function (next) {
  const student = this as IStudent;

  const hashedPassword = await bcrypt.hash(
    student.password,
    Number(config.bcrypt_salt_round),
  );
  student.password = hashedPassword;
  next();
});

studentSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

studentSchema.pre('find', async function (next) {
  await this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', async function (next) {
  await this.find({ isDeleted: { $ne: true } });
  next();
});

export const StudentModel = model<IStudent>('Student', studentSchema);
