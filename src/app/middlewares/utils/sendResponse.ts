import { Response } from "express";
import httpStatus from "http-status";

type TResponse<T> = {
    message: string,
    data : T
}

const sendResponse = <T>(res: Response, result: TResponse<T> ) => {
    return res.status(httpStatus.OK).json({
          success: true,
          message: result.message,
          data: result.data,
    });
}

export default sendResponse