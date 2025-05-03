import { Router } from 'express';
import * as  postController from '../controllers/post.controller';

const postRouter = Router();

postRouter
    .get('/', postController.getPosts)
    .get('/:postId', postController.getPost)
    .get('/user/:userId', postController.getPostsByUser)
    .get('/author/:authorId', postController.getPostsByAuthor)
    .post('/', postController.createPosts)
    .put('/:postId', postController.updatePost)
    .delete('/:postId', postController.deletePost)

export default postRouter;
