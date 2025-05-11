import type { Prisma, Ustensil } from "../generated/prisma";
import prisma from "../utils/prisma";
import type { MediaParams } from "./media.reposotory";

export async function createUstensils(ustensils: UstensilParams[]): Promise<Ustensil[]> {
    try {
        const newUstensils = await Promise.all(ustensils.map(async (ustensil) => {
            return await prisma.ustensil.create({
                data: {
                    name: ustensil.name,
                    image: {
                        create: ustensil.image
                    },
                    description: ustensil.description || undefined
                }
            })
        }))
        return newUstensils
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getUstensils(): Promise<Ustensil[]> {
    try {
        const ustensils = await prisma.ustensil.findMany();
        return ustensils;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getUstensil(id: string): Promise<Ustensil> {
    try {
        const ustensil = await prisma.ustensil.findFirst({
            where: {
                id
            }
        })
        if (ustensil) {
            return ustensil;
        } else {
            throw new Error("Ustensil not found");
        }
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateUstensil(ustensil: Ustensil): Promise<Ustensil> {
    try {
        const updatedUstensil = await prisma.ustensil.update({
            where: {
                id: ustensil.id
            },
            data: ustensil
        })
        return updatedUstensil;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteUstensil(id: string): Promise<Ustensil> {
    try {
        const deletedUstensil = await prisma.ustensil.delete({
            where: {
                id
            }
        })
        return deletedUstensil;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllUstensils(): Promise<Prisma.BatchPayload> {
    try {
        const deletedUstensils = await prisma.ustensil.deleteMany();
        return deletedUstensils;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export interface UstensilParams {
    name: string;
    image: MediaParams;
    description: string;
}