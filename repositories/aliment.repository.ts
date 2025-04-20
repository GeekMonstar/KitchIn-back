import type { Aliment, Prisma } from "../generated/prisma";
import prisma from "../utils/prisma";

export async function createAliments(aliments: AlimentParams[]): Promise<Aliment[]> {
    try {
        const newAliments = await Promise.all(aliments.map((aliment) => {
            return prisma.aliment.create({
                data: {
                    name: aliment.name,
                    image: aliment.image
                }
            })
        }))
        return newAliments;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getAliments(): Promise<Aliment[]> {
    try {
        const aliments = await prisma.aliment.findMany();
        return aliments;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getAliment(id: string): Promise<Aliment> {
    try {
        const aliment = await prisma.aliment.findFirst({
            where: {
                id
            }
        })
        if (aliment) {
            return aliment;
        } else {
            throw new Error("Aliment not found");
        }
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateAliment(aliment: Aliment): Promise<Aliment> {
    try {
        const updatedAliment = await prisma.aliment.update({
            where: {
                id: aliment.id
            },
            data: aliment
        })
        return updatedAliment;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAliment(id: string): Promise<Aliment> {
    try {
        const deletedAliment = await prisma.aliment.delete({
            where: {
                id
            }
        })
        return deletedAliment;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllAliments(): Promise<Prisma.BatchPayload> {
    try {
        const deletedAliments = await prisma.aliment.deleteMany();
        return deletedAliments;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export interface AlimentParams {
    name: string,
    image: string
}