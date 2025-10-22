import { postModel } from "../../Schema/post.schema.js";

export const deletePost = async (req, res) => {
  const user = req.user;
  const { postId } = req.body;

  if (!postId) {
    return res.status(400).json({ message: "Post ID is required." });
  }

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({ message: "Post not found." });
  }

  if (post.user.toString() !== user._id.toString()) {
    return res
      .status(403)
      .json({ message: "Unauthorized to delete this post." });
  }

  await postModel.findByIdAndDelete(postId);

  return res.status(200).json({ message: "Post deleted successfully." });
};
