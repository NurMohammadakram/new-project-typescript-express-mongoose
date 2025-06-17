import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
    const academicFacultyData = req.body;
    const result = await academicFacultyServices.createAcademicFacultyIntoDB(
        academicFacultyData
    );

    sendResponse(res, {
        message: 'Academic semester created successfully',
        data: result,
    });

})

const getAllAcademicFaculty = catchAsync(async (req, res) => {
    const result = await academicFacultyServices.getAllAcademicFacultyFromDB()

    sendResponse(res, {
        message: 'Academic faculties retrieved successfully',
        data: result,
    })
}) 

const getSingleAcademicFaculty = catchAsync( async (req, res) => {
    const { FacultyId } = req.params;
    const result = await academicFacultyServices.getSingleAcademicFacultyFromDB(FacultyId)
    sendResponse(res, {
        message: 'Academic faculty retrieved successfully',
        data: result,
    })

})

const updateAcademicFaculty = catchAsync(async (req, res) => {
    const {FacultyId} = req.params;
    const data = req.body
    const result = await academicFacultyServices.updateAcademicFacultyIntoDB(FacultyId, data)
    sendResponse(res, {
        message: 'Academic faculty updated successfully',
        data: result,
    })

})

export const academicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    updateAcademicFaculty
};