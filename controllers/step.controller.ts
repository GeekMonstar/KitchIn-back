import * as stepService from '../services/step.service';
import type { Request, Response } from 'express';

export async function createSteps(req: Request, res: Response): Promise<void> {
    try {
        const { steps } = req.body;
        const newSteps = await stepService.createSteps(steps);
        res.status(201).json(newSteps);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getSteps(req: Request, res: Response): Promise<void> {
    try {
        const steps = await stepService.getSteps();
        res.status(200).json(steps);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getStep(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const step = await stepService.getStep(id);
        res.status(200).json(step);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getStepsByRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { recipeId } = req.params;
        if (!recipeId) {
            res.status(400).json({ error: "Missing recipeId" });
            return;
        }
        const steps = await stepService.getStepsByRecipe(recipeId);
        res.status(200).json(steps);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function updateStep(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const step = req.body;
        const updatedStep = await stepService.updateStep({ ...step, id });
        res.status(200).json(updatedStep);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteStep(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const deletedStep = await stepService.deleteStep(id);
        res.status(200).json(deletedStep);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteAllSteps(req: Request, res: Response): Promise<void> {
    try {
        const { recipeId } = req.params;
        if (!recipeId) {
            res.status(400).json({ error: "Missing recipeId" });
            return;
        }
        const deletedSteps = await stepService.deleteAllSteps();
        res.status(200).json(deletedSteps);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteAllStepsByRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { recipeId } = req.params;
        if (!recipeId) {
            res.status(400).json({ error: "Missing recipeId" });
            return;
        }
        const deletedSteps = await stepService.deleteStepsByRecipe(recipeId);
        res.status(200).json(deletedSteps);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}