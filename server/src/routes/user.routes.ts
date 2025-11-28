import {Router} from "express"
import { forgotPassword, getMe, logoutUser, resendOtp, resetPassword, updateProfile, userLogin, userRegister, verifyEmails } from "../controller/user.controller"
import { isAuthenticated } from "../middleware/auth.middleware"


const userRouter = Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.post('/verify-email', verifyEmails)
userRouter.post('/forgot-Password', forgotPassword)
userRouter.post('/logout',isAuthenticated, logoutUser)
userRouter.post('/resend-otp',isAuthenticated, resendOtp)
userRouter.post("/reset-password/:token", resetPassword);
userRouter.get('/me',isAuthenticated, getMe) 
userRouter.put("/update/profile/:userId", isAuthenticated, updateProfile);
export default userRouter