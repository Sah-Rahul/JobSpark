import {Router} from "express"
import { forgotPassword, logoutUser, userLogin, userRegister, verifyEmails } from "../controller/user.controller"


const userRouter = Router()



userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.post('/verify-email', verifyEmails)
userRouter.post('/forgot-Password', forgotPassword)
userRouter.post('/logout', logoutUser)





export default userRouter