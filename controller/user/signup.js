import { hash } from "bcrypt";
import { userModel } from "../../Schema/user.schema.js";
import jwt from "jsonwebtoken";
export const signUp = async (request, response) => {
  const data = request.body;

  const prevUser = await userModel.findOne({ email: data.email });
  if (prevUser) {
    response.status(400).json({ message: "email already exist" });
  } else {
    console.log("User succesfully added.");
    const saltRounds = 10;
    const hashedPassword = await hash(data.password, saltRounds);
    const res = await userModel.create({
      username: data.username,
      password: hashedPassword,
      email: data.email,
    });
    console.log(res);
    const accessToken = jwt.sign(
      {
        data: res,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    response.json(accessToken);
  }
};
