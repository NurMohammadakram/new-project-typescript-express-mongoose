import { Router } from 'express';
import { studentControllers } from './student.controller';

const router = Router();
router.get('/', studentControllers.getAllStudent);
router.get('/:studentId', studentControllers.getSingleStudent);
router.put('/:studentId', studentControllers.updateStudent);
router.delete('/:studentId', studentControllers.deleteStudent);
export { router as studentRoutes };
