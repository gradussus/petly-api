const { Pet } = require("../../schemas/petModel");

const addPet = async (req, res) => {
  const { _id } = req.user;
  const newPet = await Pet.create({ ...req.body, owner: _id });

  res.status(201).json({ status: "success", code: 201, data: newPet });
};

module.exports = addPet;
