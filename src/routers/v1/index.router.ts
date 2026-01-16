import { Hono } from "hono";
import pingRouter from "./ping.router";

const v1Router = new Hono();

v1Router.route("/ping", pingRouter);

export default v1Router;