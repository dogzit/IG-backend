import { postModel } from "../../Schema/post.schema.js";

export const getAllPost = async (_req, res) => {
  const post = await postModel.find().populate("user");
  res.status(200).json(post);
};
