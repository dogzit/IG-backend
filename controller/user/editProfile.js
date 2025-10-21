import { userModel } from "../../Schema/user.schema.js";

export const editProfile = async (req, res) => {
  const userId = req.user._id;

  const { bio, username } = req.body;

  const users = await userModel.findByIdAndUpdate(userId, {
    bio,
    username,
  });
  res.status(200).json(users);
};
