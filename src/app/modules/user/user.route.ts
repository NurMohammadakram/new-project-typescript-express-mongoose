import { Router } from 'express';
import { userControllers } from './user.controller';
import { studentValidations }   from '../student/student.validation.zod';
import validationRequest from '../../middlewares/validateRequest'; ;

const router = Router();
router.post('/create-student', validationRequest(studentValidations.createStudentZodValidatonSchema), userControllers.createStudent);

export const userRouter = router;
