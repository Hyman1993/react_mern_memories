import express from "express";
import { getPosts,createPost } from "../controller/posts.js";

const router = express.Router();

//localhost://5000/posts  get method
router.get('/', getPosts);

//localhost://5000/posts  post method
router.post('/', createPost);

export default router;
