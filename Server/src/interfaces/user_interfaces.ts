export interface user{
    id?:number,
    username:string,
    email:string,
    password:string,
    role?: "user" | "admin" 
}