import { Router } from "express";
import messageRoute from "./messages.route";

const routes = Router();
routes.use("/messages", messageRoute);

export default routes;