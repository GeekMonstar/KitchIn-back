import type { Ingredient, Prisma } from '../generated/prisma';
import * as ingredientRepository from '../repositories/ingredient.repository';

export async function createIngredients(ingredients: ingredientRepository.IngredientParams[]): Promise<Ingredient[]> {
    try {
        const newIngredients = await ingredientRepository.createIngredients(ingredients);
        return newIngredients
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getIngredients(): Promise<Ingredient[]> {
    try {
        const ingredients = await ingredientRepository.getIngredients();
        return ingredients;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getIngredient(id: string): Promise<Ingredient> {
    try {
        const ingredient = await ingredientRepository.getIngredient(id);
        return ingredient;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateIngredient(ingredient: Ingredient): Promise<Ingredient> {
    try {
        const updatedIngredient = await ingredientRepository.updateIngredient(ingredient);
        return updatedIngredient;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteIngredient(id: string): Promise<Ingredient> {
    try {
        const deletedIngredient = await ingredientRepository.deleteIngredient(id);
        return deletedIngredient;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllIngredients(): Promise<Prisma.BatchPayload> {
    try {
        const deletedIngredients = await ingredientRepository.deleteAllIngredients();
        return deletedIngredients;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}