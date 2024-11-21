import { Router } from 'express';
import { getProductos, createProducto, getProductoById, updateProducto, deleteProducto} from '../controllers/producto.controllers';
import {validateMiddleware} from "../middlewares/validacionSchema"
import {ProductAddValidations, validateUpdateProduct} from "../schema/producto_validaciones"

const router = Router();

router.get('/',  getProductos)

router.get('/:id',  getProductoById)

router.post('/:userId', ProductAddValidations, validateMiddleware, createProducto)

router.put('/:id', validateUpdateProduct, validateMiddleware, updateProducto )

router.delete('/:id', deleteProducto)

export default router;