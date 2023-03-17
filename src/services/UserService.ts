export interface IUser {
    name: string
    email:string
}

const db = [
    {
        name: "admin",
        email: "teste@teste.bank"
    }
]

export class UserService{

    db: IUser[]

    constructor( database = db){
        this.db = database
    }

    createUser = (name:string, email:string) =>{
        const user = {
            name,
            email
        }
        this.db.push(user)
        console.log('DB Atualizado', this.db)
    }

    getAllUsers = () =>{
        console.log(this.db)
        return this.db
    }

    deleteUser = () =>{
        console.log('Usuário deletado!')
        return this.db.pop();
    }
}