import { createMiddleware } from "hono/factory";
import { asyncLocalStorage } from "../utils/helpers/request.helpers";

export const attachCorrelationIdMiddleware = createMiddleware(async (c, next) => {
    const correlationId = crypto.randomUUID(); // Built-in, no uuid package needed

    c.header("x-correlation-id", correlationId);

    await asyncLocalStorage.run({ correlationId }, async () => {
        await next();
    });
});