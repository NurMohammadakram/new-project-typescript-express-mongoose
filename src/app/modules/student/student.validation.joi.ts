import Joi from 'joi';

const userNameSchemaJoi = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  middleName: Joi.string()
    .optional()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  lastName: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
});

const guardianSchemaJoi = Joi.object({
  fatherName: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  fatherOccupation: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  fatherContactNo: Joi.string().required().trim(),
  motherName: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  motherOccupation: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  motherContactNo: Joi.string().required().trim(),
});

const localGuardianSchemaJoi = Joi.object({
  name: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  occupation: Joi.string()
    .required()
    .trim()
    .max(20)
    .messages({ 'string.max': 'the field can not concede 20 characters!' }),
  contactNo: Joi.string().required().trim(),
  address: Joi.string().required().trim(),
});

// Define Joi schema for the main studentSchema
const studentSchemaJoi = Joi.object({
  id: Joi.string().optional(),
  name: userNameSchemaJoi.required(),
  gender: Joi.string().valid('male', 'female').required(),
  dateOfBirth: Joi.string().required(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  permanentAddress: Joi.string().required(),
  presentAddress: Joi.string().required(),
  guardian: guardianSchemaJoi.required(),
  localGuardian: localGuardianSchemaJoi.required(),
  profileImg: Joi.string().optional(),
  isDeleted: Joi.boolean().optional().default(false),
});

export default studentSchemaJoi;
