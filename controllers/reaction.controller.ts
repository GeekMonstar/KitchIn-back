import * as reactionService from '../services/reaction.service';
import type { Request, Response } from 'express';
import type { Reaction } from '../generated/prisma';
import type { ReactionParams } from '../repositories/reaction.repository';

export async function createReaction(req: Request, res: Response): Promise<void> {
    try {
        const { type, userId, postId } = req.body;
        if (!type || !userId || !postId) {
            res.status(400).json({ error: 'Invalid request body' });
            return;
        }
        const newReaction: ReactionParams = { type, userId, postId };
        const reaction = await reactionService.createReaction(newReaction);
        res.status(201).json(reaction);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function getReactions(req: Request, res: Response): Promise<void> {
    try {
        const { postId } = req.params;
        if (!postId) {
            res.status(400).json({ error: 'Post ID is required' });
            return;
        }
        const reactions = await reactionService.getReactions(postId);
        res.status(200).json(reactions);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function getReaction(req: Request, res: Response): Promise<void> {
    try {
        const { reactionId } = req.params;
        if (!reactionId) {
            res.status(400).json({ error: 'Reaction ID is required' });
            return;
        }
        const reaction = await reactionService.getReaction(reactionId);
        if (!reaction) {
            res.status(404).json({ error: 'Reaction not found' });
            return;
        }
        res.status(200).json(reaction);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function getReactionsByUser(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        if (!userId) {
            res.status(400).json({ error: 'User ID is required' });
            return;
        }
        const reactions = await reactionService.getReactionsByUser(userId);
        res.status(200).json(reactions);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function updateReaction(req: Request, res: Response): Promise<void> {
    try {
        const { reactionId } = req.params;
        const { reaction } = req.body;
        if (!reactionId || !reaction) {
            res.status(400).json({ error: 'Invalid request body' });
            return;
        }
        const updatedReaction = await reactionService.updateReaction(reaction as Reaction);
        if (!updatedReaction) {
            res.status(404).json({ error: 'Reaction not found' });
            return;
        }
        res.status(200).json(updatedReaction);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}