import { Sequelize, Dialect } from "sequelize";
import { DATABASE_PUBLIC_URL } from "../config/conf";

const sequelize = new Sequelize(DATABASE_PUBLIC_URL);

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
