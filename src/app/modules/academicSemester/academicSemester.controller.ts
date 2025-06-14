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

export const AcademicSemesterControllers = {
    createAcademicSemester,
};