// src/services/UserService.js
import User from '../models/User_model';

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

  async create(userData: { username: string; email: string; password: string; role: string }) {
    try {
      // Asignar la contraseña hasheada antes de crear el usuario
      const newUser = await User.create(userData);
      return newUser;
    } catch (err: any) {
      throw new Error('Error al crear usuario: ' + err.message);
    }
  }

  async login(userData: { email: string; password: string }) {
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


  async update(id:number, userData: { username: string; email: string, password:string, role:number }) {
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
