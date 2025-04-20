import type { Aliment, Prisma } from '../generated/prisma';
import * as alimentRepository from '../repositories/aliment.repository';

export async function createAliments(aliments: alimentRepository.AlimentParams[]): Promise<Aliment[]> {
    try {
        const newAliments = await alimentRepository.createAliments(aliments);
        return newAliments;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getAliments(): Promise<Aliment[]> {
    try {
        const aliments = await alimentRepository.getAliments();
        return aliments;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getAliment(id: string): Promise<Aliment> {
    try {
        const aliment = await alimentRepository.getAliment(id);
        return aliment;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateAliment(aliment: Aliment): Promise<Aliment> {
    try {
        const updatedAliment = await alimentRepository.updateAliment(aliment);
        return updatedAliment;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAliment(id: string): Promise<Aliment> {
    try {
        const deletedAliment = await alimentRepository.deleteAliment(id);
        return deletedAliment;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllAliments(): Promise<Prisma.BatchPayload> {
    try {
        const deletedAliments = await alimentRepository.deleteAllAliments();
        return deletedAliments;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}