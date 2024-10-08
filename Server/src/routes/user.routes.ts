import { Router } from 'express';
import {getUsers, loginUser, createUser, getUserById, updateUser, deleteUser, ctrlGetUserInfoByToken} from '../controllers/user.controllers';
import {validateMiddleware} from "../middlewares/validacionSchema"
import {userCreateValidations, userUpdateValidations} from "../schema/usuario_validaciones"



const router = Router();

router.get('/info', ctrlGetUserInfoByToken)

router.get('/', getUsers)

router.get('/:id',  getUserById)

router.post('/login', loginUser)

router.post('/register', userCreateValidations, validateMiddleware, createUser)

router.put('/:id', userUpdateValidations, validateMiddleware, updateUser )

router.delete('/:id', deleteUser )

export default router;