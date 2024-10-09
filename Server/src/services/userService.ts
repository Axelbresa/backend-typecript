// src/services/UserService.js
import User from '../models/User_model';
import {user} from "../interfaces/user_interfaces"
import {UserFactory} from "../factory/factory_user"
import {comparePassword, hashPassword} from "../helper/bycript"

class UserService {
  async findAll() {
    try {
      return await User.findAll();
    } catch (err:any) {
      throw new Error('Error al obtener usuarios: ' + err.message);
    }
  }

  async findById(id: number) {
    try {
      return await User.findByPk(id);
    } catch (err:any) {
      throw new Error('Error al obtener usuario: ' + err.message);
    }
  }

  async create(userData: Omit<user, 'id'>) {
    try {
      // Hashear la contraseña antes de crear el usuario
      const hashedPassword = await hashPassword(userData.password);

      console.log("userdata:", userData)
      // Crear el usuario usando la fábrica (admin o cliente)
      const newUser = await UserFactory.createUser(userData.role, {
        ...userData,
        password: hashedPassword, // Asignar la contraseña hasheada
      });

      return newUser;
    } catch (err: any) {
      throw new Error('Error al crear usuario: ' + err.message);
    }
  }

  async login(userData: { email: string}) {
    try {
      // Buscar el usuario en la base de datos por correo electrónico
      const user = await User.findOne({ where: { email: userData.email } });
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return { user };
    } catch (err: any) {
      throw new Error('Error en el login: ' + err.message);
    }
  }


  async update(id:number, userData: user) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('Usuario no encontrado');
      return await user.update(userData);
    } catch (err:any) {
      throw new Error('Error al actualizar usuario: ' + err.message);
    }
  }

  async delete(id:number) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('Usuario no encontrado');
      return await user.destroy();
    } catch (err:any) {
      throw new Error('Error al eliminar usuario: ' + err.message);
    }
  }
}

export default new UserService();
