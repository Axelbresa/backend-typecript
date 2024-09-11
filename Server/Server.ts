import express, { Application} from "express";
import cors from 'cors'
import morgan from "morgan";
import { PORT } from './src/config/conf'
import { dbConnection } from "./src/db/db";
// import userRoutes from './src/routes/user.routes.js'


export class Server {
     app: Application
     port: string | undefined

    constructor() {
        this.app = express();
        this.port = PORT;

        this.dbConnect();

        this.middlewares()
        // this.routes();
    }

    async dbConnect(){
        await dbConnection()
    }

    middlewares():void{
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

//Rutas
    // routes(){
    //     this.app.use('/user', userRoutes)
    // }

//Inicializacion del servidor
    listen(){
        this.app.listen(this.port, () => console.log(`http://Localhost:${this.port}`))
    }

}

