import type { Post, Prisma, Reaction, ReactionType } from "../generated/prisma"
import prisma from "../utils/prisma"
import type { MediaParams } from "./media.reposotory"
import type { ReactionParams } from "./reaction.repository"

export async function createPosts(posts: PostParams[]): Promise<Post[]> {
    try {
        console.log(posts);
        const allPosts = await Promise.all(posts.map(async (post) => {
            const { content, medias, published=true, recipeId, authorId, repostOf, responseTo } = post
            const newPost = await prisma.post.create({
                data: {
                    content,
                    medias: {
                        createMany: {
                            data: medias ? medias : []
                        }
                    },
                    published,
                    recipe: recipeId ? {
                        connect: { id: recipeId }
                    } : undefined,
                    author: {
                        connect: { id: authorId }
                    },
                    reposts: repostOf ?{
                        connect: { id: repostOf }
                    }: undefined,
                    responses: responseTo ? {
                        connect: { id: responseTo }
                    }: undefined,
                    reactions: post.reactions ? {
                        createMany: {
                            data: post.reactions ? post.reactions.map(reaction => ({
                                type: reaction.type as ReactionType,
                                userId: reaction.userId
                            })) : []
                        }
                    }: undefined
                }
            })
            return newPost
        }))
        return allPosts
    }catch (error) {
        console.error("Error creating posts:", error)
        throw new Error((error as Error).message)
    }

}

export async function getPosts(): Promise<Post[]> {
    try {
        const posts = await prisma.post.findMany({
            include: {
                medias: true,
                author: true,
                recipe: {
                    include: {
                        medias: true
                    }
                },
                reactions: true,
                reposts: true,
                responses: true,
            }
        });
        return posts;
    }catch (error) {
        throw new Error((error as Error).message)
    }
}

export async function getPost(id: string): Promise<Post> {
    try {
        const post = await prisma.post.findUnique({
            where: { id }
        });
        if(post) {
            return post;
        }
        else {
            throw new Error("Post not found")
        }
    }catch (error) {
        throw new Error((error as Error).message)
    }
}

export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
    try {
        const posts = await prisma.post.findMany({
            where: { authorId }
        });
        return posts;
    }catch (error) {
        throw new Error((error as Error).message)
    }
}

export async function updatePost(post: Post): Promise<Post> {
    try {
        const updatedPost = await prisma.post.update({
            where: { 
                id: post.id
            },
            data: {...post}
        });
        return updatedPost;
    }catch (error) {
        throw new Error((error as Error).message)
    }
}

export async function deletePost(id: string): Promise<Post> {
    try {
        const deletedPost = await prisma.post.delete({
            where: { id }
        });
        return deletedPost;
    }catch (error) {
        throw new Error((error as Error).message)
    }
}

export async function deleteAllPosts(): Promise<Prisma.BatchPayload> {
    try {
        const deletedPosts = await prisma.post.deleteMany();
        return deletedPosts;
    }catch (error) {
        throw new Error((error as Error).message)
    }
}

export interface PostParams {
    content: string,
    medias: MediaParams[],
    published: boolean,
    recipeId: string,
    authorId: string,
    repostOf?: string,
    responseTo?: string,
    reactions?: ReactionParams[]
}