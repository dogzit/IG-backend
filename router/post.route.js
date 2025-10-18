import express from "express";
import { createPost } from "../controller/post/createPost.js";
import { getPost } from "../controller/post/getPost.js";
import { getAllPost } from "../controller/post/getAllPost.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { togglePostLike } from "../controller/post/postLike.js";
import { getOtherUserPost } from "../controller/post/getOtherUserPost.js";

const postRouter = express.Router();
postRouter.post("/create", authMiddleware, createPost);
postRouter.get("/user", authMiddleware, getPost);
postRouter.get("/otherUser/:userId", authMiddleware, getOtherUserPost);
postRouter.get("/get", authMiddleware, getAllPost);
postRouter.post("/toggle-like/:postId", authMiddleware, togglePostLike);

export default postRouter;
