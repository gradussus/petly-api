const { NotFound } = require("http-errors");

const { Pet } = require("../../schemas/petModel");

const deletePet = async (req, res, next) => {
  const { _id } = req.user;
  const { id } = req.params;

  const petToDelete = await Pet.findByIdAndRemove({
    _id: id,
    owner: { _id },
  });
  if (!petToDelete) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.status(200).json({
    data: { petToDelete },
  });
};

module.exports = deletePet;
