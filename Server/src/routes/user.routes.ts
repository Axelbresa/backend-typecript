import { Router } from 'express';
// import {getUsers} from '../controllers/user.controllers';
import {getUsers, createUser, getUserById, updateUser, deleteUser} from '../controllers/user.controllers';

import {validateSchema} from "../middlewares/validacionSchema"
import {userCreateValidations, userUpdateValidations} from "../schema/usuario_validaciones"

const router = Router();

router.get('/', getUsers)
router.get('/:id',  getUserById)
router.post('/', userCreateValidations, validateSchema, createUser)
router.put('/:id', userUpdateValidations, validateSchema, updateUser )
router.delete('/:id', deleteUser )

export default router;