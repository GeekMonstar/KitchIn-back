import type { Prisma, Ustensil } from '../generated/prisma';
import * as ustensilRepository from '../repositories/ustensil.repository';

export async function createUstensils(ustensils: ustensilRepository.UstensilParams[]): Promise<Ustensil[]> {
    try {
        const newUstensils = await ustensilRepository.createUstensils(ustensils);
        return newUstensils
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getUstensils(): Promise<Ustensil[]> {
    try {
        const ustensils = await ustensilRepository.getUstensils();
        return ustensils;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getUstensil(id: string): Promise<Ustensil> {
    try {
        const ustensil = await ustensilRepository.getUstensil(id);
        return ustensil;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateUstensil(ustensil: Ustensil): Promise<Ustensil> {
    try {
        const updatedUstensil = await ustensilRepository.updateUstensil(ustensil);
        return updatedUstensil;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteUstensil(id: string): Promise<Ustensil> {
    try {
        const deletedUstensil = await ustensilRepository.deleteUstensil(id);
        return deletedUstensil;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllUstensils(): Promise<Prisma.BatchPayload> {
    try {
        const deletedUstensils = await ustensilRepository.deleteAllUstensils();
        return deletedUstensils;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}