// import 'dotenv/config'; 


type VE = string | undefined;

export const PORT: string | VE = process.env.PORT;
export const DATABASE_PUBLIC_URL: string = process.env.DATABASE_PUBLIC_URL!

