import type { Request, Response } from 'express';
import * as alimentService from '../services/aliment.service';

export async function createAliments(req: Request, res: Response): Promise<void> {
    try {
        const {aliments} = req.body;
        const newAliments = await alimentService.createAliments(aliments);
        res.status(201).json(newAliments);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getAliments(req: Request, res: Response): Promise<void> {
    try {
        const aliments = await alimentService.getAliments();
        res.status(200).json(aliments);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getAliment(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if(!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const aliment = await alimentService.getAliment(id);
        res.status(200).json(aliment);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function updateAliment(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if(!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const aliment = req.body;
        const updatedAliment = await alimentService.updateAliment({ ...aliment, id });
        res.status(200).json(updatedAliment);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteAliment(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        if(!id) {
            res.status(400).json({ error: "Missing id" });
            return;
        }
        const deletedAliment = await alimentService.deleteAliment(id);
        res.status(200).json(deletedAliment);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function deleteAllAliments(req: Request, res: Response): Promise<void> {
    try {
        const deletedAliments = await alimentService.deleteAllAliments();
        res.status(200).json(deletedAliments);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}