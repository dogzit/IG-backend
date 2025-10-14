import { postModel } from "../../Schema/post.schema.js";

export const getPost = async (req, res) => {
  const userId = req.user._id;

  const post = await postModel.find({ user: userId });
  res.status(200).json(post);
};
