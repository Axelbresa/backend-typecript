import { Router } from 'express';
import { getProductos, createProducto, getProductoById, updateProducto, deleteProducto} from '../controllers/producto.controllers';
import {validateSchema} from "../middlewares/validacionSchema"
import {ProductAddValidations, validateUpdateProduct} from "../schema/producto_validaciones"

const router = Router();

router.get('/',  getProductos)

router.get('/:id',  getProductoById)

router.post('/add', ProductAddValidations, validateSchema, createProducto)

router.put('/:id', validateUpdateProduct, validateSchema, updateProducto )

router.delete('/:id', deleteProducto)

export default router;