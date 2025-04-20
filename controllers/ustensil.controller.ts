import * as ustensilService from '../services/ustensil.service';
import type { Request, Response } from 'express';

export async function createUstensils(req: Request, res: Response): Promise<void> {
    try {
        const { ustensils } = req.body;
        const newUstensils = await ustensilService.createUstensils(ustensils);
        res.status(201).json(newUstensils);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getUstensils(req: Request, res: Response): Promise<void> {
    try {
        const ustensils = await ustensilService.getUstensils();
        res.status(200).json(ustensils);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getUstensil(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const ustensil = await ustensilService.getUstensil(id);
        res.status(200).json(ustensil);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function updateUstensil(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const ustensil = req.body;
        const updatedUstensil = await ustensilService.updateUstensil({ ...ustensil, id });
        res.status(200).json(updatedUstensil);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteUstensil(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const deletedUstensil = await ustensilService.deleteUstensil(id);
        res.status(200).json(deletedUstensil);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteAllUstensils(req: Request, res: Response): Promise<void> {
    try {
        const deletedUstensils = await ustensilService.deleteAllUstensils();
        res.status(200).json(deletedUstensils);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}