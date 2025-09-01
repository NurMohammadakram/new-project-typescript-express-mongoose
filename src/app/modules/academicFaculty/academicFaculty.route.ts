import { Router } from "express";
import { createAcademicFacultyValidationSchema, updateAcademicFacultyValidationSchema } from "./academicFaculty.validation";
import validationRequest from "../../middlewares/validateRequest";
import { academicFacultyControllers } from "./academicFaculty.controller";

const router = Router();
router.post('/create-academic-faculty', validationRequest(createAcademicFacultyValidationSchema ), academicFacultyControllers.createAcademicFaculty);
router.get('/', academicFacultyControllers.getAllAcademicFaculty);
router.get('/:FacultyId', academicFacultyControllers.getSingleAcademicFaculty);
router.patch('/:FacultyId', validationRequest(updateAcademicFacultyValidationSchema), academicFacultyControllers.updateAcademicFaculty);

export const academicFacultyRoutes = router;