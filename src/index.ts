import express, { Request, Response, Router} from 'express';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router)

server.get('/', (request: Request, response:Response)=>{
    return response.status(200).json({message:'DioBank API'})
})

server.listen(5000, ()=> console.log('Sever on'))