import { Router } from "express";
import * as alimentController from "../controllers/aliment.controller";

const alimentRouter = Router();
alimentRouter
    .post("/", alimentController.createAliments)
    .get("/", alimentController.getAliments)
    .get("/:id", alimentController.getAliment)
    .put("/:id", alimentController.updateAliment)
    .delete("/:id", alimentController.deleteAliment);

export default alimentRouter;