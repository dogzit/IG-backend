import { postModel } from "../../Schema/post.schema.js";

export const getOtherUserPost = async (req, res) => {
  const { userId } = req.params;

  const post = await postModel.find({ user: userId });
  res.status(200).json(post);
};
