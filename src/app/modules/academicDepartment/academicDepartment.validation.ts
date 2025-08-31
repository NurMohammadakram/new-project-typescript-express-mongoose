import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: 'name must be string',
        }) .min(1, 'name is required'),
        academicFaculty: z.string({
            invalid_type_error: 'academicFaculty must be string',
        }) .min(1, 'academicFaculty is required'),
    })
})

const updateAcademicDepartmentValidatonSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: 'name must be string',
        }).optional(),
        academicFaculty: z.string({
            invalid_type_error: 'academicFaculty must be string',
        }).optional(),
    })
})


export const academicDepartmentValidation = {
    createAcademicDepartmentValidationSchema
    , updateAcademicDepartmentValidatonSchema
}