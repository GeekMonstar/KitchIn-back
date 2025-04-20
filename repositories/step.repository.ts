import type { MediaParams } from "./media.reposotory";
import prisma from "../utils/prisma";
import type { Prisma, Step } from "../generated/prisma";

export async function createSteps(steps: StepParams[]): Promise<Step[]> {
    try {
        const newSteps = await Promise.all(steps.map((step) => {
            return prisma.step.create({
                data: {
                    name: step.name,
                    description: step.description,
                    order: step.order,
                    recipe: {
                        connect: {
                            id: step.recipeId
                        }
                    },
                    medias: {
                        create: step.medias
                    }
                }
            })
        }))
        return newSteps
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getSteps(): Promise<Step[]> {
    try {
        const steps = await prisma.step.findMany();
        return steps;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getStep(id: string): Promise<Step> {
    try {
        const step = await prisma.step.findFirst({
            where: {
                id
            }
        })
        if (step) {
            return step;
        } else {
            throw new Error("Step not found");
        }
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getStepsByRecipe(recipeId: string): Promise<Step[]> {
    try {
        const steps = await prisma.step.findMany({
            where: {
                recipe: {
                    id: recipeId
                }
            }
        })
        return steps;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateStep(step: Step): Promise<Step> {
    try {
        const updatedStep = await prisma.step.update({
            where: {
                id: step.id
            },
            data: step
        })
        return updatedStep;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteStep(id: string): Promise<Step> {
    try {
        const deletedStep = await prisma.step.delete({
            where: {
                id
            }
        })
        return deletedStep;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllSteps(): Promise<Prisma.BatchPayload> {
    try {
        const deletedSteps = await prisma.step.deleteMany();
        return deletedSteps;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteStepsByRecipe(recipeId: string): Promise<Prisma.BatchPayload> {
    try {
        const deletedSteps = await prisma.step.deleteMany({
            where: {
                recipe: {
                    id: recipeId
                }
            }
        });
        return deletedSteps;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export interface StepParams {
    name: string,
    description: string,
    order: number,
    medias: MediaParams[],
    recipeId: string
}