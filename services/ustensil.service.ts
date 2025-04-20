import type { Ustensil } from '../generated/prisma';
import * as ustensilRepository from '../repositories/ustensil.repository';

export async function createUstensils(ustensils: ustensilRepository.UstensilParams[]): Promise<Ustensil[]> {
    try {
        const newUstensils = await ustensilRepository.createUstensils(ustensils);
        return newUstensils
    } catch (err) {
        throw new Error((err as Error).message);
    }
}