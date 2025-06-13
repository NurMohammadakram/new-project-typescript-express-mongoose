import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

/*
const validationRequest = (schema: AnyZodObject) => {
return async (req: Request, res: Response, next: NextFunction) => {
    try {
    await schema.parseAsync( {body: req.body});
    next();
    }catch (error) {
        next(error)
    }
}
}
*/
const validationRequest = (schema: AnyZodObject) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(schema.parseAsync({ body: req.body }))
            .then(() => next())
            .catch(error => next(error));
    })
}   

export default validationRequest;