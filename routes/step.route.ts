import { Router } from 'express';
import * as stepController from "../controllers/step.controller";

const stepRouter = Router();

stepRouter
    .get("/", stepController.getSteps)
    .get("/:id", stepController.getStep)
    .put("/:id", stepController.updateStep)
    .delete("/:id", stepController.deleteStep);

export default stepRouter;