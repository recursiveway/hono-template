import type { Context } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { AppError } from "../utils/errors/app.error";
import logger from "../config/logger.config";

export const errorHandler = (err: Error, c: Context) => {
    logger.error(err.message, { stack: err.stack });

    if (err instanceof AppError) {
        return c.json({
            success: false,
            message: err.message
        }, err.statusCode as ContentfulStatusCode);
    }

    return c.json({
        success: false,
        message: "Internal Server Error"
    }, 500);
};