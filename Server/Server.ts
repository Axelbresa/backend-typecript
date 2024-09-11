import express, { Application} from "express";
import cors from 'cors'
import morgan from "morgan";
import { PORT } from './src/config/conf.js'
// import productRoutes from './src/routes/productos.routes.js'
// import userRoutes from './src/routes/user.routes.js'
// import compraRoutes from './src/routes/compra.routes.js'
// import ventaRoutes from './src/routes/venta.routes.js'
// import carritoRoutes from './src/routes/carrito.routes.js'
// import { dbConnection } from "./src/db/db.js";
//sdsads
//comentarios

class Server {
    private app: Application
    private port: string | undefined

    constructor() {
        this.app = express();
        this.port = PORT;

        this.dbConnect();

        this.middlewares()
        // this.routes();
    }

    async dbConnect(){
        // await dbConnection()
    }

    middlewares():void{
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

//Rutas
    // routes(){
    //     this.app.use('/producto', productRoutes)
    //     this.app.use('/user', userRoutes)
    //     this.app.use('/compra', compraRoutes)
    //     this.app.use('/venta', ventaRoutes)
    //     this.app.use('/carrito', carritoRoutes)
    // }

//Inicializacion del servidor
    listen(){
        this.app.listen(this.port, () => console.log(`http://Localhost:${this.port}`))
    }

}


export default Server;