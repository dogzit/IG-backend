import { commentModel } from "../../Schema/comment.schema.js";

export const deleteComment = async (req, res) => {
  try {
    const user = req.user;
    const { commentId } = req.params;

    if (!commentId) {
      return res.status(400).json({ message: "commentId is required" });
    }

    const comment = await commentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." });
    }


    if (comment.user.toString() !== user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this comment." });
    }

    await commentModel.findByIdAndDelete(commentId);

    return res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
