import { Request } from "express"
import { makeMockResponse } from "../mocks/mockResponse"
import { UsersController } from "./usersController"
import exp from "constants"

describe("User controller", () => {
    const userController = new UsersController()

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it("Deve listar os nossos usuarios" , () => {
       userController.listUsers(mockRequest, mockResponse)
       expect(mockResponse.state.status).toBe(200)
       expect(mockResponse.state.json).toHaveLength(3)
    })

    it("Deve criar um novo usuário ", () => {
        mockRequest.body = {
            name: "Novo usuário"
        }

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({"mensagem": `Usuário Novo usuário cadastrado com sucesso!`})
    })

    it("Não deve criar novo usuário com nome em branco", () => {
        mockRequest.body = {
            name: ''
        }

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({"mensagem": "Não é possível criar um usuário sem um nome"})

    })
})