import { UserService } from "../services/UserService";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

describe('UserController()',()=>{

    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn()
    }
    const userController = new UserController(mockUserService as UserService);
    const mockResponse = makeMockResponse()

    
        it('createUser()', ()=>{
        const mockRequest = {
            body: {
                name:'admin',
                email:'teste@teste.bank'
            }
        }as Request
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário criado !'})
    });
    
        it('!createUser(name:string)',()=>{
                const mockRequest = {
            body: {
                name:'',
                email:'teste@teste.bank'
                }
            }as Request
            userController.createUser(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(400)
            expect(mockResponse.state.json).toMatchObject({message: 'Bad request! Name is required'})
    });
        
        it('!createUser(email:string)',()=>{
            const mockRequest = {
                body: {
                    name:'admin',
                    email:''
                }
            }as Request
            userController.createUser(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(400)
            expect(mockResponse.state.json).toMatchObject({message: 'Bad request! Email is required'})
    });
        
        it('getAllUsers()',()=>{
            const mockRequest = makeMockRequest({})
            userController.getAllUsers(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(200)
    });
        it('deleteUser()',()=>{
            const mockRequest = {
                body:{
                    name:'admin',
                    email: ''
                }
            } as Request

            userController.deleteUser(mockRequest, mockResponse)
            expect(mockResponse.state.status).toBe(200)
            expect(mockResponse.state.json).toMatchObject({message:'Usuário deletado!'})
        });
});