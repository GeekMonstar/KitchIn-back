import { Router } from "express";
import * as ustensilController from "../controllers/ustensil.controller";

const ustensilRouter = Router();

ustensilRouter
    .post("/", ustensilController.createUstensils)
    .get("/", ustensilController.getUstensils)
    .get("/:id", ustensilController.getUstensil)
    .put("/:id", ustensilController.updateUstensil)
    .delete("/:id", ustensilController.deleteUstensil);
    
export default ustensilRouter;