import { Router } from 'express';
import { studentControllers } from './student.controller';

const router = Router();
router.post('/create-student', studentControllers.createStudent);
router.delete('/:studentId', studentControllers.deleteStudent);
export { router as studentRouter };
