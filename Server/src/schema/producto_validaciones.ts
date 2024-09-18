import { body } from 'express-validator';

// Middleware de validación para agregar un producto
export const ProductAddValidations = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre del producto es obligatorio.'),
  
  body('descripcion')
    .optional()
    .isString()
    .withMessage('La descripción debe ser una cadena de texto.'),
  
  body('categoria')
    .optional()
    .isString()
    .withMessage('La categoría debe ser una cadena de texto.'),
  
  body('precio')
    .isFloat({ gt: 0 })
    .withMessage('El precio debe ser un número positivo.'),
  
  body('cantidad_stock')
    .optional()
    .isInt({ min: 0 })
    .withMessage('La cantidad en stock debe ser un número entero no negativo.'),
  
  body('proveedor')
    .optional()
    .isString()
    .withMessage('El proveedor debe ser una cadena de texto valida.'),
];

export const validateUpdateProduct = [
    body('nombre')
      .trim()
      .notEmpty()
      .withMessage('El nombre del producto es obligatorio.'),
    
    body('descripcion')
      .optional()
      .isString()
      .withMessage('La descripción debe ser una cadena de texto.'),
    
    body('categoria')
      .optional()
      .isString()
      .withMessage('La categoría debe ser una cadena de texto.'),
    
    body('precio')
      .isFloat({ gt: 0 })
      .withMessage('El precio debe ser un número positivo.'),
    
    body('cantidad_stock')
       .isInt({ min: 0 })
      .withMessage('La cantidad en stock debe ser un número entero no negativo.'),
    
    body('proveedor')
      .optional()
      .isString()
      .withMessage('El proveedor debe ser una cadena de texto.'),
  ];