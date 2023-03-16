import { IUser, UserService } from "./UserService";

describe('UserService', ()=>{
    const mockDB: IUser[] = []
    const userService = new UserService(mockDB);

    it('deve adicionar um novo usuário', ()=>{
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('teste','teste@teste.com');
        expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDB);
    });

    it('deve deletar todos os usuários',()=>{
        const mockConsole = jest.spyOn(global.console,'log');
        userService.deleteAllUsers();
        expect(mockConsole).toHaveBeenCalledWith('usuários deletados!')
    })
});