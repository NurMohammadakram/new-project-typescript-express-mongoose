import { model, Schema } from "mongoose";
import { IAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new Schema<IAcademicFaculty> ({
    name: { 
        type: String, 
        required: true, 
        unique: true }
},
{
    timestamps: true,
}
)

academicFacultySchema.pre('save', async function (next) {
    const isFacultyExists = await AcademicFacultyModel.findOne({
        name: this.name
    })
    if (isFacultyExists) {
        throw new Error('This faculty already exists!');
    }
    next();
}
)

academicFacultySchema.pre('findOneAndUpdate', async function (next) {
    const isFacultyExists = await AcademicFacultyModel.findOne(this.getQuery())
    
    if (!isFacultyExists) {
        throw new Error('Faculty not found!');
    }
    next();
}
)

export const AcademicFacultyModel = model<IAcademicFaculty>('AcademicFaculty', academicFacultySchema);