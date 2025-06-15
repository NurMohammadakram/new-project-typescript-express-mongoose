import { model, Schema } from 'mongoose';
import { IAcademicSemester } from './academicSemester.interface';
import {
    academicSemesterCode,
    academicSemesterMonth,
    academicSemesterName,
} from './academicSemester.constant';

export const academicSemesterSchema = new Schema<IAcademicSemester>(
    {
        name: {
            type: String,
            required: true,
            enum: academicSemesterName,
        },
        year: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
            enum: academicSemesterCode,
        },
        startMonth: {
            type: String,
            required: true,
            enum: academicSemesterMonth,
        },
        endMonth: {
            type: String,
            required: true,
            enum: academicSemesterMonth,
        },
    },
    {
        timestamps: true,
    }
);

academicSemesterSchema.pre('save', async function (next) {
    const isSemesterExist =  await AcademicSemesterModel.findOne({
        name: this.name,
        year: this.year,
    })
    if (isSemesterExist) {
        throw new Error(
            'Academic semester already exists for this year and name'
        );
    }
    next();
})

export const AcademicSemesterModel = model<IAcademicSemester>(
    'AcademicSemester',
    academicSemesterSchema
);