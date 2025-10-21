import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import userRouter from "./router/user.route.js";
import postRouter from "./router/post.route.js";
import dotenv from "dotenv";
import commentRouter from "./router/comment.route.js";

dotenv.config();
const port = 6969;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

const connectToDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
};
connectToDb();

app.listen(port, () => {
  console.log(`Your app is working on http://localhost:${port}`);
});
