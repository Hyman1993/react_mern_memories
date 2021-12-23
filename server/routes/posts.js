import express from "express";
import { getPosts,createPost,updatePost,deletePost,likePost } from "../controller/posts.js";

const router = express.Router();

//localhost://5000/posts  get method
router.get('/', getPosts);

//localhost://5000/posts  post method
router.post('/', createPost);

// mapping url id
router.patch('/:id',updatePost);

router.delete('/:id',deletePost);

router.patch('/:id/likePost', likePost);

export default router;
