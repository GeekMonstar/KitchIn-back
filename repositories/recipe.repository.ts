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
                    preparationDuration: recipe.preparationDuration,
                    cookingDuration: recipe.cookingDuration,
                    difficulty: recipe.difficulty || 1,
                    author: {
                        connect: {
                            id: recipe.authorId
                        }
                    },
                    medias: {
                        create: recipe.medias
                    },
                    ingredients: {
                        create: recipe.ingredients.map((ingredient) => {
                            return {
                                name: ingredient.name,
                                quantity: ingredient.quantity || null,
                                unit: ingredient.unit || null,
                                aliment: {
                                    connect: {
                                        id: ingredient.alimentId
                                    }
                                }
                            }
                        })
                    },
                    ustensils: {
                        connect: recipe.ustensils.map((ustensilId) => ({
                                id: ustensilId
                        }))
                    },
                    steps: {
                        create: recipe.steps.map((step, order) => {
                            return {
                                name: step.name || null,
                                description: step.description,
                                order,
                                medias: {
                                    create: step.medias
                                },
                                aliments: {
                                    connect: step.aliments.map((alimentId) => ({
                                        id: alimentId
                                    }))
                                },
                                ustensils: {
                                    connect: step.ustensils.map((ustensilId) => ({
                                        id: ustensilId
                                    }))
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
                medias: true,
                ingredients: true,
                ustensils: true,
                steps: true,
                author: true
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

export async function updateRecipe(id: string, recipe: RecipeParams): Promise<Recipe> {
    try {
        const updatedRecipe = await prisma.recipe.update({
            where: {
                id
            },
            data: {
                name: recipe.name || undefined,
                description: recipe.description || undefined,
                preparationDuration: recipe.preparationDuration || undefined,
                cookingDuration: recipe.cookingDuration || undefined,
                difficulty: recipe.difficulty || undefined,
            }
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
    preparationDuration: number,
    cookingDuration: number,
    difficulty: number,
    authorId: string,
    medias: MediaParams[],
    steps: StepParams[]
    ingredients: IngredientParams[],
    ustensils: string[],
}