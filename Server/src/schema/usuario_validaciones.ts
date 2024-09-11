// src/middlewares/usuarioValidations.js
import { body } from 'express-validator';

// Validaciones para Usuarios
export const userCreateValidations = [
    body('username')
      .notEmpty().withMessage('El nombre de usuario no puede estar vacío')
      .isLength({ min: 3, max: 50 }).withMessage('El nombre de usuario debe tener entre 3 y 50 caracteres'),
    body('email')
      .isEmail().withMessage('El correo electrónico debe tener un formato válido')
      .notEmpty().withMessage('El correo electrónico no puede estar vacío'),
    body('password')
      .notEmpty().withMessage('La contraseña no puede estar vacía')
      .isLength({ min: 6, max: 100 }).withMessage('La contraseña debe tener entre 6 y 100 caracteres'),
    body('role')
      .optional()
      .isIn(['cliente', 'vendedor', 'admin']).withMessage('El rol debe ser uno de los siguientes: cliente, vendedor, admin'),
  ];
  
  export const userUpdateValidations = [
      body('username')
        .notEmpty().withMessage('El nombre de usuario no puede estar vacío')
        .isLength({ min: 3, max: 50 }).withMessage('El nombre de usuario debe tener entre 3 y 50 caracteres'),
      body('email')
        .isEmail().withMessage('El correo electrónico debe tener un formato válido')
        .notEmpty().withMessage('El correo electrónico no puede estar vacío'),
      body('password')
        .notEmpty().withMessage('La contraseña no puede estar vacía')
        .isLength({ min: 6, max: 100 }).withMessage('La contraseña debe tener entre 6 y 100 caracteres'),
      body('role')
        .optional()
        .isIn(['cliente', 'vendedor', 'admin']).withMessage('El rol debe ser uno de los siguientes: cliente, vendedor, admin'),
    ];