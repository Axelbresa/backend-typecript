// src/controllers/user.controllers.js
import { Request, Response } from 'express';
import UserService from '../services/userService.ts';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.findAll();
    if (users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios' });
    }
    return res.json(users);
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al obtener usuarios', error: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json(user);
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al obtener usuario', error: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.create(req.body);
    return res.status(201).json({ message: 'Usuario creado', user });
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al crear usuario', error: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {

  try {
    const user = await UserService.update(req.params.id, req.body);
    return res.json({ message: 'Usuario actualizado', user });
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al actualizar usuario', error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserService.delete(req.params.id);
    return res.json({ message: 'Usuario eliminado' });
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al eliminar usuario', error: err.message });
  }
};
