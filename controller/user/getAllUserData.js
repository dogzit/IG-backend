import { userModel } from "../../Schema/user.schema.js";

export const getUserData = async (_req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
};
