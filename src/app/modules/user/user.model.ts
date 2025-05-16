import { model, Schema } from 'mongoose';
import { Iuser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

export const userSchema = new Schema<Iuser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, optional: true, default: true },
    role: {
      type: String,
      enum: {
        values: ['student', 'faculty', 'admin'],
      },
      optional: true
    },
    status: {
      type: String,
      enum: {
        values: ['in-progress', 'blocked'],
      },
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, optional: true, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const student = this as Iuser;

  const hashedPassword = await bcrypt.hash(
    student.password,
    Number(config.bcrypt_salt_round),
  );
  student.password = hashedPassword;
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<Iuser>('User', userSchema);
