import type { Ingredient, Prisma, Unit } from "../generated/prisma";
import prisma from "../utils/prisma";

export async function createIngredients(ingredients: IngredientParams[]): Promise<Ingredient[]> {
    try {
        const newIngredients = await Promise.all(
            ingredients.map(async (ingredient) => {
                return await prisma.ingredient.create({
                    data: {
                        name: ingredient.name,
                        quantity: ingredient.quantity,
                        unit: ingredient.unit,
                        aliment: {
                            connect: {
                                id: ingredient.alimentId
                            }
                        },
                        recipe: {
                            connect: {
                                id: ingredient.recipeId
                            }
                        }
                    }
                });
            })
        );
        return newIngredients;
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getIngredients(): Promise<Ingredient[]> {
    try {
        const ingredients = await prisma.ingredient.findMany();
        return ingredients;
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getIngredient(id: string): Promise<Ingredient> {
    try {
        const ingredient = await prisma.ingredient.findFirst({
            where: {
                id
            }
        });
        if (ingredient) {
            return ingredient;
        } else {
            throw new Error("Ingredient not found");
        }
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateIngredient(ingredient: Ingredient): Promise<Ingredient> {
    try {
        const updatedIngredient = await prisma.ingredient.update({
            where: {
                id: ingredient.id
            },
            data: ingredient
        });
        return updatedIngredient;
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteIngredient(id: string): Promise<Ingredient> {
    try {
        const deletedIngredient = await prisma.ingredient.delete({
            where: {
                id
            }
        });
        return deletedIngredient;
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteIngredients(id: string[]): Promise<Ingredient[]> {
    try {
        const deletedIngredients = await Promise.all(
            id.map(async (ingredientId) => {
                return await prisma.ingredient.delete({
                    where: {
                        id: ingredientId
                    }
                });
            })
        );
        return deletedIngredients;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllIngredients(): Promise<Prisma.BatchPayload> {
    try {
        const deletedIngredients = await prisma.ingredient.deleteMany();
        return deletedIngredients;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}
export interface IngredientParams {
    name: string,
    quantity: number,
    unit: Unit,
    alimentId: string,
    recipeId: string
}