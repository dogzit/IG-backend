import { postModel } from "../../Schema/post.schema.js";

export const createPost = async (request, response) => {
  const user = request.user;
  const data = request.body;
  const res = await postModel.create({
    postImages: data.image,
    user: user._id,
    caption: data.caption,
  });

  response.json({ res });
};
