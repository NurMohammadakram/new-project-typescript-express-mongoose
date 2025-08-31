
/*
#################################################
## example of catchAsync usage ##
## try-catch block removed using catchAsync util ##
#################################################


import { Request, Response } from "express";
import { academicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = async (req: Request, res: Response) => {

    try {
        const academicDepartmentData = req.body;
    const result = await academicDepartmentServices.createAcademicDepartmentIntoDB(
        academicDepartmentData
    )

    res.status(200).json({
        success: true,
        message: 'Academic department created successfully',
        data: result,
    });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: 'Failed to create academic department',
            error: error.message,
        });
    }   
}
*/

import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
    const academicDepartmentData = req.body;
    const result = await academicDepartmentServices.createAcademicDepartmentIntoDB(academicDepartmentData)
    
    sendResponse(res, {
        message: 'Academic department created successfully',
        data: result,
    })
}
)

const getAllAcademicDepartment = catchAsync(async (req, res) => {
    const result = await academicDepartmentServices.getAllAcademicDepartmentFromDB();

    sendResponse(res, {
        message: 'Academic departments retrieved successfully', 
        data: result
    })
})

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const {id} = req.params;
    const result = await academicDepartmentServices.getSingleAcademicDepartmentFromDB(id);

    sendResponse(res, {
        message: 'Academic department retrieved successfully',
        data: result
    })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    const result = await academicDepartmentServices.updateAcademicDepartmentIntoDB(id, data);

    sendResponse(res, {
        message: 'Academic department updated successfully',
        data: result
    })
})



export const academicDepartmentControllers = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment
};