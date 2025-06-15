import catchAsync from "../../utils/catchAsync";
import { academicSemesterServices } from './academicSemester.service';
import sendResponse from '../../utils/sendResponse';

const createAcademicSemester = catchAsync(async (req, res) => {
    const academicSemesterData = req.body;
    const result = await academicSemesterServices.createAcademicSemesterIntoDB(
        academicSemesterData
    );

    sendResponse(res, {
        message: 'Academic semester created successfully',
        data: result,
    });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const {semesterId } = req.params;
    const result = await academicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
    sendResponse(res, {
        message: 'Successfully retrieved the academic semester',
        data: result,
    })
})

const getAllAcademicSemesters = catchAsync(async (req, res) => {
    const result = await academicSemesterServices.getAllAcademicSemestersFromDB()
    sendResponse(res, {
        message: 'Successfully retrieved all academic semesters',
        data: result,
    })


})

const updateAcademicSemester = catchAsync(async (req, res) => {
    const {semesterId} = req.params;
    const data = req.body;
    const result = await academicSemesterServices.updateAcademicSemesterIntoDB(semesterId, data);
    sendResponse(res, {
        message: 'Successfully updated the academic semester',
        data: result,
    });
});

export const academicSemesterControllers = {
    createAcademicSemester,
    getSingleAcademicSemester,
    getAllAcademicSemesters,
    updateAcademicSemester,
};