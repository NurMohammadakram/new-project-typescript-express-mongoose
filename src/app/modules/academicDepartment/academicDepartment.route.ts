import { Router } from "express";
import { academicDepartmentControllers } from "./academicDepartment.controller";
import validationRequest from "../../middlewares/validateRequest";
import { academicDepartmentValidation } from "./academicDepartment.validation";

const router = Router();

router.post('/create-department',validationRequest(academicDepartmentValidation.createAcademicDepartmentValidationSchema),academicDepartmentControllers.createAcademicDepartment);
router.get('/', academicDepartmentControllers.getAllAcademicDepartment);
router.get('/:departmentId', academicDepartmentControllers.getSingleAcademicDepartment);
router.patch('/:departmentId', validationRequest(academicDepartmentValidation.updateAcademicDepartmentValidatonSchema), academicDepartmentControllers.updateAcademicDepartment);

export const academicDepartmentRoutes = router;