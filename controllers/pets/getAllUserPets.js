const { Pet } = require("../../schemas/petModel");

const getAllUserPets = async (req, res) => {
  const { _id: owner } = req.user;

  const AllUserPets = await Pet.find({ owner });

  if (!AllUserPets) {
    return res
      .status(404)
      .json({ Message: "This user does not have any pet yet" });
  }

  res.status(200).json(AllUserPets);
};

module.exports = getAllUserPets;
