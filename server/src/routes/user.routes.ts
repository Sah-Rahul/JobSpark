import {Router} from "express"
import { userRegister } from "../controller/user.controller"


const userRouter = Router()



userRouter.post('/register', userRegister)


export default userRouter