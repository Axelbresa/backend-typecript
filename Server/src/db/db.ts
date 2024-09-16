import { Sequelize, Dialect } from "sequelize";
import { DATABASE, USERNAME, PASSWORD, HOST, DIALECT, DB_PORT } from "../config/conf";

const sequelize = new Sequelize(
    DATABASE as string,
    USERNAME as string,
    undefined,
    {
        host: HOST,
        dialect: DIALECT as Dialect,
        port: +DB_PORT
    }
);

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch(err => {
        console.error("Error al sincronizar tablas:", err);
    });

export const dbConnection = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Nos hemos conectado a la base de datos');
    } catch (err) {
        console.log('Error al conectarse a la base de datos', err);
        process.exit(1);
    }
};

export default sequelize;
