// src/services/UserService.js
import User from '../models/User_model.js';

class UserService {
  async findAll() {
    try {
      return await User.findAll();
    } catch (err) {
      throw new Error('Error al obtener usuarios: ' + err.message);
    }
  }

  async findById(id) {
    try {
      return await User.findByPk(id);
    } catch (err) {
      throw new Error('Error al obtener usuario: ' + err.message);
    }
  }

  async create(userData) {
    try {
      return await User.create(userData);
    } catch (err) {
      throw new Error('Error al crear usuario: ' + err.message);
    }
  }

  async update(id, userData) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('Usuario no encontrado');
      return await user.update(userData);
    } catch (err) {
      throw new Error('Error al actualizar usuario: ' + err.message);
    }
  }

  async delete(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error('Usuario no encontrado');
      return await user.destroy();
    } catch (err) {
      throw new Error('Error al eliminar usuario: ' + err.message);
    }
  }
}

export default new UserService();
