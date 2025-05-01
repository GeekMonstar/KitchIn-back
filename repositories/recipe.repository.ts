import type { Prisma, Recipe } from "../generated/prisma";
import prisma from "../utils/prisma";
import type { IngredientParams } from "./ingredient.repository";
import type { MediaParams } from "./media.reposotory";
import type { StepParams } from "./step.repository";

export async function createRecipe(recipes: RecipeParams[]): Promise<Recipe[]> {
    try {
        const newRecipes = await Promise.all(recipes.map((recipe) => {
            return prisma.recipe.create({
                data: {
                    name: recipe.name,
                    description: recipe.description,
                    duration: recipe.duration,
                    difficulty: recipe.difficulty,
                    medias: {
                        create: recipe.medias
                    },
                    steps: {
                        create: recipe.steps.map((step) => {
                            return {
                                name: step.name,
                                description: step.description,
                                order: step.order,
                                medias: {
                                    create: step.medias
                                }
                            }
                        }
                        )
                    }
                }
            })
        }))
        return newRecipes
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getRecipes(): Promise<Recipe[]> {
    try {
        const recipes = await prisma.recipe.findMany({
            include: {
                medias: true
            }
        });
        return recipes;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getRecipe(id: string): Promise<Recipe> {
    try {
        const recipe = await prisma.recipe.findFirst({
            where: {
                id
            },
            include: {
                medias: true
            }
        })
        if (recipe) {
            return recipe;
        } else {
            throw new Error("Recipe not found");
        }
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateRecipe(recipe: Recipe): Promise<Recipe> {
    try {
        const updatedRecipe = await prisma.recipe.update({
            where: {
                id: recipe.id
            },
            data: recipe
        })
        return updatedRecipe;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteRecipe(id: string): Promise<Recipe> {
    try {
        const deletedRecipe = await prisma.recipe.delete({
            where: {
                id
            }
        })
        return deletedRecipe;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllRecipes(): Promise<Prisma.BatchPayload> {
    try {
        const deletedRecipes = await prisma.recipe.deleteMany();
        return deletedRecipes;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export interface RecipeParams {
    name: string,
    description: string,
    duration: number,
    difficulty: number,
    medias: MediaParams[],
    steps: StepParams[]
    ingredients: IngredientParams[]
}