import { IAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";


const createAcacdemicDepartmentIntoDB = async (payload: IAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload);
    return result;
}

const getAllAcademicDepartmentFromDB = async () => {
    const result = await AcademicDepartment.find({})
    return result;
}

const getSingleAcademicDepartmentFromDB = async (id: string) => {
    const result = await AcademicDepartment.findById(id);
    return result
}

const updateAcademicDepartmentIntoDB = async (id: string, payload: Partial<IAcademicDepartment>) => {
    const result = await AcademicDepartment.findByIdAndUpdate(id, payload, { new: true });
    return result
}

export const academicDepartmentServices = {
    createAcacdemicDepartmentIntoDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB,
    updateAcademicDepartmentIntoDB,
};