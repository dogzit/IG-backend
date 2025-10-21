import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ message: "Need auth header" });
  }

  const accesstoken = authHeader.split(" ")[1];
  if (!accesstoken) {
    return res.status(400).json({ message: "Need auth token" });
  }

  try {
    const user = jwt.verify(accesstoken, process.env.JWT_SECRET);
    if (!user) {
      return res.status(401).json({ message: "Need to sign in" });
    }

    req.user = user.data;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Invalid or expired token", error: err.message });
  }
};
