import { Router } from "express";
import MessageController from '../controllers/message.controller';

const messagesRouter = Router();

/* POST messages */
messagesRouter.post('/', MessageController.receive);

export default messagesRouter;
