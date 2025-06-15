import { semesterCodeMapper } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model"

const createAcademicSemesterIntoDB = async(payload: IAcademicSemester) => {
    if (semesterCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code for the given semester name');
    }
    const result = await AcademicSemesterModel.create(payload)
    return result;
}

export const academicSemesterServices = {
    createAcademicSemesterIntoDB
}