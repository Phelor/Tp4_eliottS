import express from 'express'
import { getAllUsers, updateUser, createUser, getUserById } from '../controllers/user.controller.js'
import { signup } from '../controllers/auth.controller.js'

const userRouter = express.Router()

userRouter
    .route('/')
    .get(getAllUsers)
    .post(createUser)

userRouter
    .route('/:id')
    .get(getUserById)
    .put(updateUser)

userRouter
    .route('/signup')
    .post(signup)

export { userRouter }