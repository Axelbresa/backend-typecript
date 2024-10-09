import User from "../models/User_model"
import AdminUser from './adminUser';
import ClienteUser from './clienteUser';
import { hashPassword } from "../helper/bycript"; // Para el hash de la contraseña
import { user } from '../interfaces/user_interfaces';

export class UserFactory {
  static async createUser(type: "admin" | "user" | undefined, userData: Omit<user, 'id'>): Promise<User>  {
    
    // Hashear la contraseña antes de crear el usuario
    const hashedPassword = await hashPassword(userData.password);
    userData.password = hashedPassword;
    // Crear instancia basada en el tipo

    switch (type) {
      case 'user':
        let newUser = await User.create({ ...userData, role: 'user' }); // Guarda el nuevo admin en la DB
        return new ClienteUser(newUser);
      case 'admin':
        let newAdmin = await User.create({ ...userData, role: 'admin' }); // Guarda el nuevo admin en la DB
        return new AdminUser(newAdmin);
      default:
        return new ClienteUser(userData); // Retorna la instancia de ClienteUser
    }
  }
}

