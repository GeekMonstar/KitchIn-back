import express from 'express';
import alimentRouter from './routes/aliment.route';
import ingredientRouter from './routes/ingredients.route';
import recipeRouter from './routes/recipe.route';
import stepRouter from './routes/step.route';

const app = express()

app
    .use(express.static('public'))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/aliments', alimentRouter)
    .use('/ingredients', ingredientRouter)
    .use('/recipes', recipeRouter)
    .use('/steps', stepRouter)

export default app;