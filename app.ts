import express from 'express';
import cors from 'cors';
import alimentRouter from './routes/aliment.route';
import ingredientRouter from './routes/ingredients.route';
import recipeRouter from './routes/recipe.route';
import stepRouter from './routes/step.route';
// import authRouter from './routes/auth.route';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './utils/auth';

const app = express()

app
    .set("trust proxy", true)
    .use(express.static('public'))
    .use(express.urlencoded({ extended: true }))
    .use(cors({
        origin: "http://localhost:3000",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"]
    }))
    .all('/api/auth/{*any}', (req, res, next)=>{console.log("hello world!"); next();}, toNodeHandler(auth))
    .use(express.json())
    .use('/aliments', alimentRouter)
    .use('/ingredients', ingredientRouter)
    .use('/recipes', recipeRouter)
    .use('/steps', stepRouter)

export default app;