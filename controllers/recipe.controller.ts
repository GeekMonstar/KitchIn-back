import * as recipeService from '../services/recipe.service';
import type { Request, Response } from 'express';

export async function createRecipes(req: Request, res: Response): Promise<void> {
    try {
        const { recipes } = req.body;
        const newRecipes = await recipeService.createRecipes(recipes);
        res.status(201).json(newRecipes);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getRecipes(req: Request, res: Response): Promise<void> {
    try {
        const recipes = await recipeService.getRecipes();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const recipe = await recipeService.getRecipe(id);
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function updateRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const {recipe} = req.body;
        const updatedRecipe = await recipeService.updateRecipe(id, { ...recipe});
        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const deletedRecipe = await recipeService.deleteRecipe(id);
        res.status(200).json(deletedRecipe);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteAllRecipes(req: Request, res: Response): Promise<void> {
    try {
        const deletedRecipes = await recipeService.deleteAllRecipes();
        res.status(200).json(deletedRecipes);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}