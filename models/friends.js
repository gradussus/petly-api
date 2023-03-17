const { friendsService } = require("../services/friendsService");

//const { Friend } = require("../schemas/friendModel");

const getFriends = async (_, res) => {
  console.log("hi");
  //const friends = await Friend.find();
  const friends = await friendsService();
  //  //res.json(friends);
  //  res.status(200).json(friends);
  console.log(friends);
  res.json(friends);
};

module.exports = { getFriends };
