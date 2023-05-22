import express, { Application } from 'express';
import { PrincipalRoutes } from './principal.routes.js';
import cors from 'cors';

function injectRoutes(app: Application) {
    app.use(
        cors(),
        express.json(),
        PrincipalRoutes
    )
}

export {injectRoutes};