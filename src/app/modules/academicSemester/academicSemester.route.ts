import { academicSemesterValidation } from './academicSemester.validation';
import { Router } from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import validationRequest from '../../middlewares/validateRequest';


const router = Router();

router.post('/create-semester',  validationRequest(academicSemesterValidation.createAcademicSemesterValidation), academicSemesterControllers.createAcademicSemester);


export const academicSemesterRoutes = router;