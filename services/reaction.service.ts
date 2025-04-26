import type { Prisma, Reaction } from '../generated/prisma';
import * as reactionRepository from '../repositories/reaction.repository';

export async function createReaction(reaction: reactionRepository.ReactionParams): Promise<Reaction> {
    try {
        const newReaction = await reactionRepository.createReaction(reaction);
        return newReaction;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getReactions(postId: string): Promise<Reaction[]> {
    try {
        const reactions = await reactionRepository.getReactions(postId);
        return reactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getReaction(id: string): Promise<Reaction> {
    try {
        const reaction = await reactionRepository.getReaction(id);
        return reaction;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getReactionsByUser(userId: string): Promise<Reaction[]> {
    try {
        const reactions = await reactionRepository.getReactionsByUser(userId);
        return reactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function updateReaction(reaction: Reaction): Promise<Reaction> {
    try {
        const updatedReaction = await reactionRepository.updateReaction(reaction);
        return updatedReaction;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function deleteReaction(id: string): Promise<Reaction> {
    try {
        const deletedReaction = await reactionRepository.deleteReaction(id);
        return deletedReaction;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function deleteAllReactions(): Promise<Prisma.BatchPayload> {
    try {
        const deletedReactions = await reactionRepository.deleteAllReactions();
        return deletedReactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}