import { Router } from "express";
import * as recipeController from "../controllers/recipe.controller";
import * as stepController from "../controllers/step.controller";

const recipeRouter = Router();

recipeRouter
    .post("/", recipeController.createRecipes)
    .get("/", recipeController.getRecipes)
    .get("/:id", recipeController.getRecipe)
    .put("/:id", recipeController.updateRecipe)
    .delete("/:id", recipeController.deleteRecipe)
    .post("/:id/steps", stepController.createSteps)
    .get("/:id/steps", stepController.getSteps)

export default recipeRouter;