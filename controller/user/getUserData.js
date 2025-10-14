import { userModel } from "../../Schema/user.schema.js";

export const getOtherUserData = async (req, res) => {
  const { UserId } = req.params;
  const user = await userModel.findById(UserId);
  res.status(200).json(user);
};
