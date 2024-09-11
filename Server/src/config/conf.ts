import 'dotenv/config';

type VE= string | undefined

export const PORT:string | VE = process.env.PORT ;
export const DATABASE: | VE = process.env.DATABASE;
export const USERNAME: | VE = process.env.USERNAME;
export const PASSWORD: | VE = process.env.PASSWORD;
export const HOST: | VE = process.env.HOST;
export const DIALECT: | VE = process.env.DIALECT;