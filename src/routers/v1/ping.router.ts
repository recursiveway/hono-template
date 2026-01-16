import { Hono } from "hono";
import { pingHandler } from "../../controllers/ping.controller";
import { validateBody } from "../../validators";
import { pingSchema } from "../../validators/ping.validator";

const pingRouter = new Hono();

pingRouter.post("/", validateBody(pingSchema), pingHandler);

pingRouter.get("/health", (c) => {
    return c.text("OK", 200);
});

export default pingRouter;