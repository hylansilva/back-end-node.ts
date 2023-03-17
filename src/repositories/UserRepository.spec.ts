import { EntityManager } from "typeorm"
import { UserEntity } from "../entities/UserEntity"
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { UserRepository } from "./UserRepository"

describe('UserRepository',()=>{
    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>
    const mockUser:UserEntity = {
        user_id: '12345',
        name: 'teste',
        email: 'teste@teste.bank',
        password: 'root'
    }
    beforeAll(async() => {
        const managerMock = await getMockEntityManager({})
        userRepository = new UserRepository(managerMock as EntityManager)
    })
    it('Deve cadastrar um novo usuário dentro do banco de dados', async()=>{
        await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
    })
})