// src/services/ProductoService.js
import Producto from '../models/Product_model';
import User from '../models/User_model';

class ProductoService {
  async findAll() {
    try {
      return await Producto.findAll();
    } catch (err: any) {
      throw new Error('Error al obtener productos: ' + err.message);
    }
  }

  async findById(id: number) {
    try {
      return await Producto.findByPk(id);
    } catch (err: any) {
      throw new Error('Error al obtener producto: ' + err.message);
    }
  }

  async findUserById(id: number) {
    try {
      return await User.findByPk(id);
    } catch (err: any) {
      throw new Error('Error al buscar usuario: ' + err.message);
    }
  }


  async create(productData: {
    nombre: string;
    descripcion?: string;
    categoria?: string;
    precio: number;
    cantidad_stock?: number;
    proveedor?: string;
  }) {
    try {
      const newProduct = await Producto.create(productData);
      return newProduct;
    } catch (err: any) {
      throw new Error('Error al crear producto: ' + err.message);
    }
  }

  async update(id: number, productData: {
    nombre?: string;
    descripcion?: string;
    categoria?: string;
    precio?: number;
    cantidad_stock?: number;
    proveedor?: string;
  }) {
    try {
      const product = await Producto.findByPk(id);
      if (!product) throw new Error('Producto no encontrado');
      return await product.update(productData);
    } catch (err: any) {
      throw new Error('Error al actualizar producto: ' + err.message);
    }
  }

  async delete(id: number) {
    try {
      const product = await Producto.findByPk(id);
      if (!product) throw new Error('Producto no encontrado');
      return await product.destroy();
    } catch (err: any) {
      throw new Error('Error al eliminar producto: ' + err.message);
    }
  }
}

export default new ProductoService();
