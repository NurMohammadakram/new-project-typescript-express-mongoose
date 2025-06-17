import { z } from "zod";


const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
  name: z
    .string({
      invalid_type_error: 'name must be string',
    })
    .min(1, 'name is required')
})
})
export const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
  name: z
    .string({
      invalid_type_error: 'name must be string',
    })
    .optional()
})
})

export default createAcademicFacultyValidationSchema;