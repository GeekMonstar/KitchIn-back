import { Router } from "express";
import * as ingredientController from "../controllers/ingredient.controller";

const ingredientRouter = Router();

ingredientRouter
    .post("/", ingredientController.createIngredients)
    .get("/", ingredientController.getIngredients)
    .get("/:id", ingredientController.getIngredient)
    .put("/:id", ingredientController.updateIngredient)
    .delete("/:id", ingredientController.deleteIngredient);

export default ingredientRouter;