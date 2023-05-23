import { Request, Response } from "express";
import {database }from "../database"

export class UsersController {

    createUser (request:Request, response:Response) : Response {
        const {name} = request.body;

        if (name.length <= 1){
            return response.status(403).json({"mensagem": "Não é possível criar um usuário sem um nome"})
        }
    
        database.push(name);
    
        return response.status(201).json({"mensagem": `Usuário ${name} cadastrado com sucesso!`});
    }

    listUsers (request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}

