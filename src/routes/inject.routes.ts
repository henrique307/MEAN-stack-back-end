import express, { Application } from 'express';
import { PrincipalRoutes } from './principal.routes.js';

function injectRoutes(app: Application) {
    app.use(
        express.json(),
        PrincipalRoutes
    )
}

export {injectRoutes};