import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "igUsers" },
  caption: { type: String, required: true },
  likes: [{ type: String, required: false }],
  postImages: { type: [{ type: String, required: true }], required: true },
  createrdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const postModel = mongoose.model("igPost", postSchema);
