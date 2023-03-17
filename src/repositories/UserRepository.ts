import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { UserEntity } from "../entities/UserEntity";

export class UserRepository{
    private manager: EntityManager

    constructor(manager = AppDataSource.manager){
        this.manager = manager;
    }

    createUser = async (user:UserEntity) =>{
        return this.manager.save(user)
    }
}
