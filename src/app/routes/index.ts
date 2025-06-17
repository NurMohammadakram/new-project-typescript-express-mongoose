import { Router} from 'express';
import { studentRouter } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = Router();

router.use('/students', studentRouter);
router.use('/users', userRouter)
router.use('/academic-semesters', academicSemesterRoutes);
router.use('/academic-faculties', academicFacultyRoutes);

export default router;