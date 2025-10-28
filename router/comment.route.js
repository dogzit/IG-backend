import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createComment } from "../controller/comment/create-comment.js";
import { getPostComment } from "../controller/comment/get-comment.js";
import { deleteComment } from "../controller/comment/delete-comment.js";
const commentRouter = express.Router();

commentRouter.post("/create", authMiddleware, createComment);
commentRouter.get("/get/:postId", authMiddleware, getPostComment);
commentRouter.delete("/delete/:commentId", authMiddleware, deleteComment);

export default commentRouter;
