import mongoose, { Schema, SchemaType } from "mongoose";

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: `igPost`, required: true },
  user: { type: Schema.Types.ObjectId, ref: `igUsers`, required: true },
  createrdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const commentModel = mongoose.model("postComment", commentSchema);
