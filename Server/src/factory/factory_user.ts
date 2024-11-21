import User from "../models/User_model"
import { hashPassword } from "../helper/bycript"; // Para el hash de la contraseña
import { user } from '../interfaces/user_interfaces';

class ClienteUser extends User {
    // Métodos y propiedades específicos para el cliente
    constructor(userData: any) {
      super();
      this.id = userData.id;
      this.username = userData.username;
      this.email = userData.email;
      this.password = userData.password;
      this.role = 'user';
    }
}
    
class AdminUser extends User {

    constructor(userData: any) {
    super()
      this.username = userData.username;
      this.email = userData.email;
      this.password = userData.password;
      this.role = 'admin';
      this.id = userData.id; // Asigna el id de la base de datos
    }
}

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

