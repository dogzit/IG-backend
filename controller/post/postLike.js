import { postModel } from "../../Schema/post.schema.js";

export const togglePostLike = async (req, res) => {
  const user = req.user;

  const params = req.params;
  const postId = params.postId;

  const post = await postModel.findById(postId);
  const postLike = post.likes;

  const isLiked = postLike.includes(user._id);

  if (!isLiked) {
    await postModel.findByIdAndUpdate(postId, {
      likes: [...postLike, user._id],
    });
  } else {
    await postModel.findByIdAndUpdate(postId, {
      likes: postLike.filter((like) => like.toString() !== user._id.toString()),
    });
  }
  res.status(200).json({ message: "succes" });
};
