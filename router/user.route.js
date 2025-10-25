import express from "express";
import { login } from "../controller/user/login.js";
import { signUp } from "../controller/user/signup.js";
import { followUser } from "../controller/user/toggle-follow.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getOtherUserData } from "../controller/user/getUserData.js";
import { getUserData } from "../controller/user/getAllUserData.js";
import { editProfile } from "../controller/user/editProfile.js";

const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/sign_up", signUp);
userRouter.get("/getOtherUserData/:UserId", getOtherUserData);
userRouter.post("/follow-toggle/:followedUserId", authMiddleware, followUser);
userRouter.post("/editProfile", authMiddleware, editProfile);
userRouter.get("/getUserData", authMiddleware, getUserData);

export default userRouter;
