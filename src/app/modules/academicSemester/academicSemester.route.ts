import { academicSemesterValidation } from './academicSemester.validation';
import { Router } from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import validationRequest from '../../middlewares/validateRequest';


const router = Router();

router.post('/create-semester',  validationRequest(academicSemesterValidation.createAcademicSemesterValidation), academicSemesterControllers.createAcademicSemester);
router.get('/:semesterId', academicSemesterControllers.getSingleAcademicSemester);
router.get('/', academicSemesterControllers.getAllAcademicSemesters);
router.patch('/:semesterId', validationRequest(academicSemesterValidation.updateAcademicSemesterValidation), academicSemesterControllers.updateAcademicSemester);


export const academicSemesterRoutes = router;