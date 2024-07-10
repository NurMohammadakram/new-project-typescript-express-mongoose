import { z } from 'zod';

const alphabeticRegex = /^[A-Za-z]+$/;

const userNameZodValidatonSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .regex(
      alphabeticRegex,
      'First name must contain only alphabetic characters',
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .regex(
      alphabeticRegex,
      'Last name must contain only alphabetic characters',
    ),
});

const guardianZodValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNo: z.string().min(1, "Mother's contact number is required"),
});

const localGuardianZodValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"),
  occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z.string().min(1, "Local guardian's contact number is required"),
  address: z.string().min(1, "Local guardian's address is required"),
});

const studentZodValidatonSchema = z.object({
  id: z.string().min(1, 'Id is required'),
  password: z.string().min(1, 'password is required'),
  name: userNameZodValidatonSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender must be either "male" or "female"' }),
  }),
  dateOfBirth: z.string().date().min(1, 'Date of birth is required'),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(10, 'email must be more than 10 charcter'),
  contactNo: z.string().min(1, 'Contact number is required'),
  emergencyContactNo: z.string().min(1, 'Emergency contact number is required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  presentAddress: z.string().min(1, 'Present address is required'),
  guardian: guardianZodValidationSchema,
  localGuardian: localGuardianZodValidationSchema,
  profileImg: z.string().optional(),
  isDeleted: z.boolean().optional().default(false),
});

export default studentZodValidatonSchema;
