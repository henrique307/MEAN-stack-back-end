import { Request, Response } from "express";
import dotenv from 'dotenv';
import { principalModel } from "../models/principal.model.js";
import { CallbackError, Error, SaveOptions } from "mongoose";

dotenv.config();

class Principal {
    static GET_principal(req: Request, res: Response) {
        principalModel.find(req.query, "", (err: Error, principais: any[]) => {
            err
            ? res.status(400).send(err)
            : res.status(200).send(principais);
        })
    }

    static POST_principal(req: Request, res: Response) {
        const novoPrincipal = new principalModel(req.body);

        novoPrincipal.save({}, (erro: CallbackError) => {
            erro 
            ? res.status(500).send(`Princiapl nao foi criado ${erro}`)
            : res.status(200).send(`Princiapl criado com sucesso!`);
        })
    }

    static DELETE_principal(req: Request, res: Response) {
        principalModel.findByIdAndDelete(req.params.id, (err: Error) => {
            err
            ? res.status(500).send(`${err} deu ruim filho`)
            : res.status(200).send("principal deletado com sucesso");
          });
    }
}

export {Principal}