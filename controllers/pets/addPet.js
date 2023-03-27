const { Pet } = require("../../schemas/petModel");

const addPet = async (req, res) => {
  const owner = req.user.id;
  const petData = req.body;
  const data = !!req.file
    ? { imageURL: req.file.path, owner, ...petData }
    : { owner, ...petData };

  const newNotice = await Pet.create(data);
  console.log(data);
  res.status(201).json(newNotice);
};

module.exports = addPet;
