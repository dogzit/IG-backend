import { compare } from "bcrypt";
import { userModel } from "../../Schema/user.schema.js";
import jwt from "jsonwebtoken";
export const login = async (request, response) => {
  const data = request.body;
  const { email, password } = data;
  const user = await userModel.findOne({ email });
  if (user) {
    const hashedPassword = user.password;
    const isvalid = await compare(password, hashedPassword);
    if (isvalid) {
      const accessToken = jwt.sign(
        {
          data: user,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3h" }
      );
      response.json(accessToken);
    } else {
      response.status(404).json({ message: "Wrong Password!" });
    }
  } else {
    response.status(400).json({ message: "Need to sign up." });
  }
};
