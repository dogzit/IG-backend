import { userModel } from "../../Schema/user.schema.js";

export const followUser = async (req, res) => {
  const followedUserId = req.params.followedUserId;
  const followingUserId = req.user._id;

  if (followedUserId === followingUserId) {
    return res
      .status(400)
      .json({ message: "maanag ymu ygad uurigu dagad bgan" });
  }

  const [followinguser, followedUser] = await Promise.all([
    userModel.findById(followingUserId),
    userModel.findById(followedUserId),
  ]);

  const alreadyFollowed = followedUser.followers.includes(followingUserId);

  if (alreadyFollowed) {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: followinguser.following.filter(
        (id) => id.toString() !== followedUserId
      ),
    });

    await userModel.findByIdAndUpdate(followedUserId, {
      followers: followedUser.followers.filter(
        (id) => id.toString() !== followingUserId
      ),
    });

    return res.status(200).json({ message: "unfollowed successfully" });
  } else {
    await userModel.findByIdAndUpdate(followingUserId, {
      following: [...followinguser.following, followedUserId],
    });

    await userModel.findByIdAndUpdate(followedUserId, {
      followers: [...followedUser.followers, followingUserId],
    });

    return res.status(200).json({ message: "success" });
  }
};
