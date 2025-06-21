import { IAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";

const createAcademicFacultyIntoDB = async(payload: IAcademicFaculty) => {
    const result = await AcademicFacultyModel.create(payload)
    if (!result) {
        throw new Error('Failed to create academic faculty');   
    }
    return result;
}

const getAllAcademicFacultyFromDB = async() => {
    const result = await AcademicFacultyModel.find({})
    if (!result) {
        throw new Error('No academic faculties found');
    }
    return result;
}

const getSingleAcademicFacultyFromDB = async(id: string) => {
    const result = await AcademicFacultyModel.findById(id);
    if (!result) {
        throw new Error(`No academic faculty found with id: ${id}`);
    }
    return result;
}

const updateAcademicFacultyIntoDB = async(id: string, payload: Partial<IAcademicFaculty>) => {
    const result = await AcademicFacultyModel.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new Error(`Failed to update academic faculty with id: ${id}`);
    }   
    return result;    
}

export const academicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyIntoDB,
};


