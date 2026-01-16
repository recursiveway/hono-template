import type { Context } from "hono";
import logger from "../config/logger.config";

export const pingHandler = async (c: Context) => {
    logger.info("Ping request received");
    return c.json({ message: "Pong!" }, 200);
};