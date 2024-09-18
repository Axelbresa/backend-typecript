import { Router } from 'express';
import {getProduct, createProduct, getProductById, updateProduct, deleteProduct} from '../controllers/producto.controllers';
import {validateSchema} from "../middlewares/validacionSchema"
import {ProductAddValidations, validateUpdateProduct} from "../schema/producto_validaciones"

const router = Router();

router.get('/', getProduct)

router.get('/:id',  getProductById)

router.post('/add', ProductAddValidations, validateSchema, createProduct)

router.put('/:id', validateUpdateProduct, validateSchema, updateProduct )

router.delete('/:id', deleteProdut)

export default router;