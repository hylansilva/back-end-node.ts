import { Request, Response} from 'express';
import { UserService } from '../services/UserService';



export class UserController {

    userService : UserService

    constructor( userService = new UserService()){
        this.userService = userService
    }

    createUser = (request:Request, response: Response)=>{
        const userService = new UserService();
        const user = request.body

        if(!user.name){
            return response.status(400).json({message: 'Bad request! Name is required'});
        }else if(!user.email){
            return response.status(400).json({message:'Bad request! Email is required'});
        }

        userService.createUser(user.name, user.email)
        return response.status(201).json({message: 'Usuário criado !'});
    }

    getAllUsers = (request:Request, response:Response) => {
        const userService = new UserService();
        const users = userService.getAllUsers();
        return response.status(200).json(users);
    }

    deleteUser = (request:Request, response: Response)=>{ 
        const user = request.body
        console.log('deletando usuário', user);
        const userService = new UserService();
        userService.deleteUser();
        return response.status(200).json({message:'Usuário deletado!'});
    }
}