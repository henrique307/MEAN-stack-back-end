import express from 'express';
import { Principal } from '../controllers/princiapal.controller.js';

const PrincipalRoutes = express.Router();

PrincipalRoutes
    .get('/', Principal.GET_principal)
    .post('/', Principal.POST_principal)
    .delete('/:id', Principal.DELETE_principal)

export {PrincipalRoutes}