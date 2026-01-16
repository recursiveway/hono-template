import { Hono } from "hono";
import { serverConfig } from "./config";
import v1Router from "./routers/v1/index.router";
import { errorHandler } from "./middlewares/error.middleware";
import logger from "./config/logger.config";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation.middleware";

const app = new Hono();

/**
 * Global middleware
 */
app.use("*", attachCorrelationIdMiddleware);

/**
 * Registering all the routers
 */
app.route("/api/v1", v1Router);

/**
 * Error handlers
 */
app.onError(errorHandler);

app.notFound((c) => {
    return c.json({
        success: false,
        message: "Not Found"
    }, 404);
});

/**
 * Start server
 */
logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
logger.info("Press Ctrl+C to stop the server.");

export default {
    port: serverConfig.PORT,
    fetch: app.fetch
};