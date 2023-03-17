import { EntityManager } from "typeorm";

interface IMockManagerArgs{
    saveReturn?: object | [object]
}

export const getMockEntityManager = async ({
    saveReturn = undefined
}:IMockManagerArgs):Promise<EntityManager> =>{
    const manager:Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(()=>Promise.resolve())
    
    return manager as EntityManager;
}