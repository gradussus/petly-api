const { friendsService } = require("../services/friendsService");

const getFriends = async (_, res) => {
  console.log("hi");

  const friends = await friendsService();

  // res.status(200).json(friends);
  //console.log(friends);
  //res.json(friends);
  res.status(200).json({
    code: 200,
    status: "success",
    data: friends,
  });
};

module.exports = { getFriends };
