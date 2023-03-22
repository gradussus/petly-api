const { Pet } = require("../../schemas/petModel");

const deletePet = async (req, res, next) => {
  const { _id } = req.user;
  const { id } = req.params;

  const petToDelete = await Pet.findByIdAndRemove({
    _id: id,
    owner: { _id },
  });
  if (!petToDelete) {
    return res
      .status(404)
      .json({ Message: "There is no such pet in the list" });
  }
  res.status(200).json({
    data: { petToDelete },
  });
};

module.exports = deletePet;
