import { Router } from 'express';
import { studentControllers } from './student.controller';

const router = Router();
router.post('/create-student', studentControllers.createStudent);

export { router as studentRouter };
