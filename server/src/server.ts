import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from "cors";
import logger from 'morgan';
import routes from './routes'

class Server {

    private app: express.Application;

    constructor(app: express.Application) {
        this.app = app;

        this.app.use(logger('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.resolve('./') + '/build/client'));

        this.app.use('/', routes);

        // Handles any requests that don't match the ones above
        app.get('*', (req, res) => {
            res.sendFile(path.resolve('./') + '/build/client/index.html');
        });

    }

    public getApp() {
        return this.app;
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}

export default new Server(express());