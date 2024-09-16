// src/controllers/user.controllers.js
import { Request, Response } from 'express';
import {hashPassword, comparePassword} from "../helper/bycript";
import {generateToken, verifyToken} from "../helper/jsonWebToken"
import UserService from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.findAll();
    if (users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron cuentas de los usuarios' });
    }
    return res.json(users);
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al obtener las cuentas de los usuarios', error: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.findById(parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: 'Cuenta del usuario no se a encontrado' });
    }
    return res.json(user);
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al obtener la cuenta del usuario', error: err.message });
  }
};

export const loginUser =async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { user } = await UserService.login(userData);
    return res.json(user);
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al obtener la cuenta del usuario', error: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // Hashear la contraseña antes de pasar los datos al modelo de usuario
    const hashedPassword = await hashPassword(userData.password);
    // Crear usuario con la contraseña hasheada
    const user = await UserService.create({...userData, password: hashedPassword})
    return res.status(201).json({ message: 'Cuenta creada', user });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al crear una cuenta', error: err.message });
  }
};


export const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const hashedPassword = await hashPassword(userData.password);

    const user = await UserService.update(parseInt(req.params.id), {...userData, password:hashedPassword});
    return res.json({ message: 'Cuenta actualizado', user });
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al actualizar la cuenta del usuario', error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserService.delete(parseInt(req.params.id));
    return res.json({ message: 'Cuenta eliminada' });
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al eliminar una cuenta', error: err.message });
  }
};
