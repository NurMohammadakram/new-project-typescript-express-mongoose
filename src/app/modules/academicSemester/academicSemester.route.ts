import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
// import validationRequest from '../../middlewares/validateRequest';


const router = Router();

router.post('/create-semester',   AcademicSemesterControllers.createAcademicSemester);