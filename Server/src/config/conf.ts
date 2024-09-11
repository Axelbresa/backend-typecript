import 'dotenv/config'; 
type VE = string | undefined;

export const PORT: string | VE = process.env.PORT;
export const DATABASE: string | VE = process.env.DATABASE;
export const USERNAME: string | VE = process.env.USERNAME;
export const PASSWORD: string | VE = process.env.PASSWORD;
export const HOST: string | VE = process.env.HOST;
export const DIALECT: string | VE = process.env.DIALECT;
