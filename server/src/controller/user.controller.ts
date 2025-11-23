import TryCacthError from "../utils/TryCacth";
import { Request,Response } from "express";


export const userRegister = TryCacthError(async (req:Request,res:Response) =>{
console.log('hello from register')
})