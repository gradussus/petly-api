const { friendsService } = require("../services/friendsService");

const getFriends = async (_, res) => {
  const friends = await friendsService();

  res.status(200).json(friends);

  // res.status(200).json({
  //   code: 200,
  //   status: "success",
  //   data: friends,
  // });
};

module.exports = { getFriends };
