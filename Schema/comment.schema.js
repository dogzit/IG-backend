import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "igUsers" },
  likes: [{ type: String, required: false }],
  commentImages: { type: [{ type: String, required: true }], required: false },
  reply: { type: String, required: false },
  createrdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const commentModel = mongoose.model("postComment", commentSchema);
