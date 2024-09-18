// src/controllers/producto.controllers.js
import { Request, Response } from 'express';
import ProductoService from '../services/productoService';

export const getProductos = async (req: Request, res: Response) => {
  try {
    const productos = await ProductoService.findAll();
    if (productos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron productos' });
    }
    return res.json(productos);
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al obtener los productos', error: err.message });
  }
};

export const getProductoById = async (req: Request, res: Response) => {
  try {
    const producto = await ProductoService.findById(parseInt(req.params.id));
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json(producto);
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al obtener el producto', error: err.message });
  }
};

export const createProducto = async (req: Request, res: Response) => {
  try {
    const productoData = req.body;
    const producto = await ProductoService.create(productoData);
    return res.status(201).json({ message: 'Producto creado', producto });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al crear el producto', error: err.message });
  }
};

export const updateProducto = async (req: Request, res: Response) => {
  try {
    const productoData = req.body;
    const producto = await ProductoService.update(parseInt(req.params.id), productoData);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json({ message: 'Producto actualizado', producto });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al actualizar el producto', error: err.message });
  }
};

export const deleteProducto = async (req: Request, res: Response) => {
  try {
    await ProductoService.delete(parseInt(req.params.id));
    return res.json({ message: 'Producto eliminado' });
  } catch (err: any) {
    return res.status(500).json({ message: 'Error al eliminar el producto', error: err.message });
  }
};
