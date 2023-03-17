const { Friend } = require("../schemas/friendModel");

const friendsService = async () => {
  const friends = await Friend.find();
  if (!friends) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  return friends;
};

module.exports = {
  friendsService,
};
