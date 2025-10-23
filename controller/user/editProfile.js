import { userModel } from "../../Schema/user.schema.js";

export const editProfile = async (req, res) => {
  const userId = req.user._id;

  const { bio, username, profilePicture } = req.body;
  const users = await userModel.findByIdAndUpdate(userId, {
    bio,
    username,
    profilePicture,
  });
  res.status(200).json(users);
};
