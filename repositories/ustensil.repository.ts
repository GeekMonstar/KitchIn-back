import type { Ustensil } from "../generated/prisma";
import prisma from "../utils/prisma";

export async function createUstensils(ustensils: Ustensil[]): Promise<Ustensil[]> {
    try {
        const newUstensils = await Promise.all(ustensils.map(async (ustensil) => {
            return await prisma.ustensil.create({
                data: {
                    name: ustensil.name,
                    image: ustensil.image,
                    description: ustensil.description
                }
            })
        }))
        return newUstensils
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export interface UstensilParams {
    name: string;
    image: string;
    description: string;
}