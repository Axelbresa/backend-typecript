import { Sequelize } from "sequelize";
import { DATABASE_PUBLIC_URL } from "../config/conf";

let sequelize: Sequelize | null = null;

export const getSequelizeInstance = (): Sequelize => {
    if (!sequelize) {
        sequelize = new Sequelize(DATABASE_PUBLIC_URL);
    }
    return sequelize;
};

export const syncDatabase = async (): Promise<void> => {
    const sequelizeInstance = getSequelizeInstance();
    try {
        await sequelizeInstance.sync({ force: false });
        console.log("Tablas sincronizadas");
    } catch (err) {
        console.error("Error al sincronizar tablas:", err);
    }
};

export const dbConnection = async (): Promise<void> => {
    const sequelizeInstance = getSequelizeInstance();
    try {
        await sequelizeInstance.authenticate();
        console.log('Nos hemos conectado a la base de datos');
    } catch (err) {
        console.log('Error al conectarse a la base de datos', err);
        process.exit(1);
    }
};

export default getSequelizeInstance;

// const sequelize = new Sequelize(DATABASE_PUBLIC_URL);

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log("Tablas sincronizadas");
//     })
//     .catch(err => {
//         console.error("Error al sincronizar tablas:", err);
//     });

// export const dbConnection = async (): Promise<void> => {
//     try {
//         await sequelize.authenticate();
//         console.log('Nos hemos conectado a la base de datos');
//     } catch (err) {
//         console.log('Error al conectarse a la base de datos', err);
//         process.exit(1);
//     }
// };

// export default sequelize;
