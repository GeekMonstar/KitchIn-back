import e from 'express';
import type { Post, Prisma } from '../generated/prisma';
import * as postRepository from '../repositories/post.repository';


export async function createPosts(post: postRepository.PostParams[]): Promise<Post[]> {
    try {
        const newPost = await postRepository.createPosts(post);
        return newPost;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getPosts(): Promise<Post[]> {
    try {
        const posts = await postRepository.getPosts();
        return posts;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getPost(id: string): Promise<Post> {
    try {
        const post = await postRepository.getPost(id);
        return post;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
    try {
        const posts = await postRepository.getPostsByAuthor(authorId);
        return posts;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function updatePost(post: Post): Promise<Post> {
    try {
        const updatedPost = await postRepository.updatePost(post);
        return updatedPost;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function deletePost(id: string): Promise<Post> {
    try {
        const deletedPost = await postRepository.deletePost(id);
        return deletedPost;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function deleteAllPosts(): Promise<Prisma.BatchPayload> {
    try {
        const deletedPosts = await postRepository.deleteAllPosts();
        return deletedPosts;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}