import { Router} from 'express';
import { studentRouter } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';

const router = Router();

router.use('/students', studentRouter);
router.use('/users', userRouter)

export default router;