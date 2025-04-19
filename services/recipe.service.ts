import type { Prisma, Recipe } from '../generated/prisma';
import * as recipeRepository from '../repositories/recipe.repository';

export async function createRecipes(recipes: recipeRepository.RecipeParams[]): Promise<Recipe[]> {
    try {
        const newRecipes = await recipeRepository.createRecipe(recipes);
        return newRecipes
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getRecipes(): Promise<Recipe[]> {
    try {
        const recipes = await recipeRepository.getRecipes();
        return recipes;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getRecipe(id: string): Promise<Recipe> {
    try {
        const recipe = await recipeRepository.getRecipe(id);
        return recipe;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateRecipe(recipe: Recipe): Promise<Recipe> {
    try {
        const updatedRecipe = await recipeRepository.updateRecipe(recipe);
        return updatedRecipe;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteRecipe(id: string): Promise<Recipe> {
    try {
        const deletedRecipe = await recipeRepository.deleteRecipe(id);
        return deletedRecipe;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllRecipes(): Promise<Prisma.BatchPayload> {
    try {
        const deletedRecipes = await recipeRepository.deleteAllRecipes();
        return deletedRecipes;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}