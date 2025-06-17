import { Router } from 'express';
import { userControllers } from './user.controller';
import validationRequest from '../../middlewares/validateRequest';import { studentValidations } from '../student/student.validation.zod';
 ;

const router = Router();
router.post('/create-student', validationRequest(studentValidations.createStudentZodValidatonSchema), userControllers.createStudent);

export const userRouter = router;
