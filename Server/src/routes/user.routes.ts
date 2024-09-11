import { Router } from 'express';
import {getUsers, createUser, getUserById, updateUser, deleteUser} from '../controllers/user.controllers';
// // import {validateSchema} from "../middlewares/validacionSchema.js"
// import {userCreateValidations, userUpdateValidations} from "../schema/usuario_validaciones.js"

const router = Router();

router.get('/', getUsers)
router.get('/:id',  getUserById)
router.post('/',  createUser)
router.put('/:id',  updateUser )
router.delete('/:id', deleteUser )

export default router;