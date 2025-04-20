import * as ingredientService from '../services/ingredient.service';
import type { Request, Response } from 'express';

export async function createIngredients(req: Request, res: Response): Promise<void> {
    try {
        const { ingredients } = req.body;
        const newIngredients = await ingredientService.createIngredients(ingredients);
        res.status(201).json(newIngredients);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getIngredients(req: Request, res: Response): Promise<void> {
    try {
        const ingredients = await ingredientService.getIngredients();
        res.status(200).json(ingredients);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getIngredient(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const ingredient = await ingredientService.getIngredient(id);
        res.status(200).json(ingredient);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function updateIngredient(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const ingredient = req.body;
        const updatedIngredient = await ingredientService.updateIngredient({ ...ingredient, id });
        res.status(200).json(updatedIngredient);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteIngredient(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const deletedIngredient = await ingredientService.deleteIngredient(id);
        res.status(200).json(deletedIngredient);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteAllIngredients(req: Request, res: Response): Promise<void> {
    try {
        const deletedIngredients = await ingredientService.deleteAllIngredients();
        res.status(200).json(deletedIngredients);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}