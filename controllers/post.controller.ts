import type { PostParams } from '../repositories/post.repository';
import * as postService from '../services/post.service';
import type { Request, Response } from 'express';

export async function createPosts(req: Request, res: Response): Promise<void> {
    try {
        const {posts} = req.body;
        if (!posts || !Array.isArray(posts)) {
            res.status(400).json({ error: 'Invalid request body' });
            return;
        }
        const newPosts = await postService.createPosts(posts as PostParams[]);
        res.status(201).json(newPosts);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function getPosts(req: Request, res: Response): Promise<void> {
    try {
        const posts = await postService.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function getPost(req: Request, res: Response): Promise<void> {
    try {
        const { postId } = req.params;
        if (!postId) {
            res.status(400).json({ error: 'Post ID is required' });
            return;
        }
        const post = await postService.getPost(postId);
        if (!post) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function getPostsByUser(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        if (!userId) {
            res.status(400).json({ error: 'User ID is required' });
            return;
        }
        const posts = await postService.getPostsByAuthor(userId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function getPostsByAuthor(req: Request, res: Response): Promise<void> {
    try {
        const { authorId } = req.params;
        if (!authorId) {
            res.status(400).json({ error: 'Author ID is required' });
            return;
        }
        const posts = await postService.getPostsByAuthor(authorId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function updatePost(req: Request, res: Response): Promise<void> {
    try {
        const { postId } = req.params;
        const postData = req.body;
        if (!postId || !postData) {
            res.status(400).json({ error: 'Post ID and data are required' });
            return;
        }
        const updatedPost = await postService.updatePost({ ...postData, id: postId });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
export async function deletePost(req: Request, res: Response): Promise<void> { 
    try {
        const { postId } = req.params;
        if (!postId) {
            res.status(400).json({ error: 'Post ID is required' });
            return;
        }
        const deletedPost = await postService.deletePost(postId);
        res.status(200).json(deletedPost);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export async function deleteAllPosts(req: Request, res: Response): Promise<void> {
    try {
        const deletedPosts = await postService.deleteAllPosts();
        res.status(200).json(deletedPosts);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}