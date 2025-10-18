import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createComment } from "../controller/comment/create-comment.js";
import { getPostComment } from "../controller/comment/get-comment.js";
const commentRouter = express.Router();

commentRouter.post("/create", authMiddleware, createComment);
commentRouter.get("/get/:postId", authMiddleware, getPostComment);

export default commentRouter;
