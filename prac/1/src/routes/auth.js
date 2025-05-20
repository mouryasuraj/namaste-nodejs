import express from 'express'
import { handleSignUp } from '../controller/auth.js'

const authRouter = express.Router()


authRouter.post("/signup", handleSignUp)


export default authRouter