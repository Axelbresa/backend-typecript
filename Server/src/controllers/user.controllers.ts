// src/controllers/user.controllers.js
import { JwtPayload } from "jsonwebtoken";
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
    const hashedPassword = user.dataValues.password;
    if (user) {
      const passwordMatch = await comparePassword(userData.password, hashedPassword);
      if (passwordMatch) {
        const token = generateToken( {id:user.dataValues.id, email:user.dataValues.email} );
        res.json({
          message: 'Autenticación exitosa',
          token,
        });
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    }
  } catch (err:any) {
    return res.status(500).json({ message: 'Error al obtener la cuenta del usuario', error: err.message });
  }
};


export const ctrlGetUserInfoByToken = async (req: Request, res: Response) => {
  const tokenHeader = req.headers["authorization"];
  console.log("tokenHeader: ", tokenHeader);

  try {
    if (!tokenHeader) {
      return res.status(401).json({ message: "No existe un token" });
    }

    // Extraer el token sin el prefijo "Bearer"
    const token = tokenHeader.replace("Bearer ", "");
    console.log("token recibido: ", token);

    try {
      // Decodificar el token
      const decodedToken = verifyToken(token) as JwtPayload;
      console.log("token decodificado: ", decodedToken);

      // Verifica que el token decodificado tiene un `id`
      if (!decodedToken || !decodedToken.id) {
        return res.status(401).json({ message: "Token inválido: no se encontró el id de usuario" });
      }

      // Convertir el id a número
      const userId = parseInt(decodedToken.id as string, 10);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "ID de usuario inválido en el token" });
      }

      console.log("userId decodificado: ", userId);

      // Buscar al usuario en la base de datos usando el userId decodificado
      const user = await UserService.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Retornar la información del usuario
      res.status(200).json(user);
    } catch (error: any) {
      console.error("Error al verificar el token:", error.message);
      return res.status(401).json({ message: "Token inválido" });
    }
  } catch (outerError: any) {
    console.error("Error general:", outerError);
    res.status(500).json({ message: "Error interno del servidor", error: outerError.message });
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
