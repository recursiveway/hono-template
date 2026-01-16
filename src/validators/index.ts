import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import logger from "../config/logger.config";

/**
 * Validate request body
 */
export const validateBody = <T extends z.ZodTypeAny>(schema: T) => {
    return zValidator("json", schema, (result, c) => {
        if (!result.success) {
            logger.error("Request body is invalid");
            return c.json({
                success: false,
                message: "Invalid request body",
                errors: result.error.issues
            }, 400);
        }
        logger.info("Request body is valid");
    });
};

/**
 * Validate query params
 */
export const validateQuery = <T extends z.ZodTypeAny>(schema: T) => {
    return zValidator("query", schema, (result, c) => {
        if (!result.success) {
            logger.error("Query params are invalid");
            return c.json({
                success: false,
                message: "Invalid query params",
                errors: result.error.issues
            }, 400);
        }
        logger.info("Query params are valid");
    });
};

/**
 * Validate URL params
 */
export const validateParams = <T extends z.ZodTypeAny>(schema: T) => {
    return zValidator("param", schema, (result, c) => {
        if (!result.success) {
            logger.error("URL params are invalid");
            return c.json({
                success: false,
                message: "Invalid URL params",
                errors: result.error.issues
            }, 400);
        }
        logger.info("URL params are valid");
    });
};