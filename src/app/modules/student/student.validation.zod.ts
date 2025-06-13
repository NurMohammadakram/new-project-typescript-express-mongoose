import { z } from 'zod';
import userZodValidationSchema from '../user/user.validation.zod';

const alphabeticRegex = /^[A-Za-z]+$/;

const userNameZodValidatonSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .trim()
    .regex(
      alphabeticRegex,
      'First name must contain only alphabetic characters',
    ),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .trim()
    .regex(
      alphabeticRegex,
      'Last name must contain only alphabetic characters',
    ),
});

const guardianZodValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required").trim(),
  fatherOccupation: z.string().min(1, "Father's occupation is required").trim(),
  fatherContactNo: z
    .string()
    .min(1, "Father's contact number is required")
    .trim(),
  motherName: z.string().min(1, "Mother's name is required").trim(),
  motherOccupation: z.string().min(1, "Mother's occupation is required").trim(),
  motherContactNo: z
    .string()
    .min(1, "Mother's contact number is required")
    .trim(),
});

const localGuardianZodValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required").trim(),
  occupation: z
    .string()
    .min(1, "Local guardian's occupation is required")
    .trim(),
  contactNo: z
    .string()
    .min(1, "Local guardian's contact number is required")
    .trim(),
  address: z.string().min(1, "Local guardian's address is required").trim(),
});

const createStudentZodValidatonSchema = z.object({
  body: z.object({
    password: userZodValidationSchema,
    student: z.object({
  name: userNameZodValidatonSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender must be either "male" or "female"' }),
  }),
  dateOfBirth: z.string().trim().date().min(1, 'Date of birth is required'),
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email address' })
    .min(10, 'email must be more than 10 charcter'),
  contactNo: z.string().trim().min(1, 'Contact number is required'),
  emergencyContactNo: z
    .string()
    .min(1, 'Emergency contact number is required')
    .trim(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  permanentAddress: z.string().min(1, 'Permanent address is required').trim(),
  presentAddress: z.string().min(1, 'Present address is required').trim(),
  guardian: guardianZodValidationSchema,
  localGuardian: localGuardianZodValidationSchema,
  profileImg: z.string().optional(),
})
  })
    
});

export const studentValidations = {createStudentZodValidatonSchema };