import { ExpressAuth } from "@auth/express"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {Router} from "express"
import Google from "@auth/express/providers/google"
import prisma from "../utils/prisma"
 
const authRouter = Router()
 
authRouter
    .use("/", ExpressAuth({ 
        providers: [Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,})],
        adapter: PrismaAdapter(prisma),
    }))

export default authRouter;