import { commentModel } from "../../Schema/comment.schema.js";
import { postModel } from "../../Schema/post.schema.js";

export const comment = async (req, res) => {
  const user = req.user;
  const { comment } = req.body;
  const { postId } = req.params;
  const comments = await commentModel.create({
    commentImages: comment,
    user: user._id,
  });

  const post = await postModel.findById({ post_id: postId });

  const postcomment = await postModel
    .findByIdAndUpdate(postId, {
      comment: [...post.comment, comments],
    })
    .populate("comment");

  res.status(200).json({ message: "Comment added", postcomment });
};
