const { friendsService } = require("../../services/friendsService");

const getFriends = async (_, res) => {
  const friends = await friendsService();

  res.status(200).json(friends);
};

module.exports = { getFriends };
