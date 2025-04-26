import e from "express";
import type { Reaction, ReactionType } from "../generated/prisma";
import prisma from "../utils/prisma";

export async function createReaction(reaction: ReactionParams) {
    try {
        const { type, userId, postId } = reaction;
        const newReaction = await prisma.reaction.create({
            data: {
                type,
                user: {
                    connect: { id: userId }
                },
                post: {
                    connect: { id: postId }
                }
            }
        });
        return newReaction;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getReactions(postId: string) {
    try {
        const reactions = await prisma.reaction.findMany({
            where: { postId }
        });
        return reactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getReaction(id: string) {
    try {
        const reaction = await prisma.reaction.findUnique({
            where: { id }
        });
        if (reaction) {
            return reaction;
        } else {
            throw new Error("Reaction not found");
        }
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getReactionsByUser(userId: string) {
    try {
        const reactions = await prisma.reaction.findMany({
            where: { userId }
        });
        return reactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getReactionsByPost(postId: string) {
    try {
        const reactions = await prisma.reaction.findMany({
            where: { postId }
        });
        return reactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function updateReaction(reaction: Reaction) {
    try {
        const updatedReaction = await prisma.reaction.update({
            where: {
                id: reaction.id
            },
            data: reaction
        });
        return updatedReaction;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function deleteReaction(id: string) {
    try {
        const deletedReaction = await prisma.reaction.delete({
            where: { id }
        });
        return deletedReaction;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function deleteAllReactions() {
    try {
        const deletedReactions = await prisma.reaction.deleteMany();
        return deletedReactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function deleteReactionsByPost(postId: string) {
    try {
        const deletedReactions = await prisma.reaction.deleteMany({
            where: { postId }
        });
        return deletedReactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
export async function deleteReactionsByUser(userId: string) {
    try {
        const deletedReactions = await prisma.reaction.deleteMany({
            where: { userId }
        });
        return deletedReactions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export interface ReactionParams {
    type: ReactionType;
    userId: string;
    postId: string;
}