import { NextFunction, Request, Response } from "express";

interface Message {
    value: string
}


class MessageController {

    async receive(request: Request, response: Response, next: NextFunction) {
        //Get message
        const message: Message = { value: request.body.message}
        response.status(201).send(message);
    }
}

export default new MessageController();