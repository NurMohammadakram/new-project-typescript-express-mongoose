import { semesterCodeMapper } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model"

const createAcademicSemesterIntoDB = async(payload: IAcademicSemester) => {
    if (semesterCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code for the given semester name');
    }
    const result = await AcademicSemesterModel.create(payload)
    if (!result) {
        throw new Error('Failed to create academic semester');
    }
    return result;
}

const getSingleAcademicSemesterFromDB = async(id: string) => {
    const result = await AcademicSemesterModel.findById(id);
    if (!result) {
        throw new Error('Academic semester not found');
    }
    return result;
}

const getAllAcademicSemestersFromDB = async() => {
    const result = await AcademicSemesterModel.find({});
    if (!result || result.length === 0) {
        throw new Error('No academic semesters found');
    }
    return result;
}

const updateAcademicSemesterIntoDB = async(id: string, payload: Partial<IAcademicSemester>) => {
    if (payload.name && payload.code && semesterCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code for the given semester name');
    }
    const updateResult = await AcademicSemesterModel.findByIdAndUpdate({_id: id}, payload, {
        new: true,})
    if (!updateResult) {
        throw new Error('Academic semester not found');
    }
    return updateResult;

}

export const academicSemesterServices = {
    createAcademicSemesterIntoDB,
    getSingleAcademicSemesterFromDB,
    getAllAcademicSemestersFromDB,
    updateAcademicSemesterIntoDB,
}