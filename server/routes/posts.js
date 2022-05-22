import express from "express";
const router = express.Router();

import {getPosts, createPost} from "../controllers/posts.js";

router.get('/', getPosts).post('/',createPost);
export default router;