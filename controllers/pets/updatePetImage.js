const { Pet } = require("../../schemas/petModel");

const updatePetImage = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const imageURL = req.file.path;
  await Pet.findByIdAndUpdate(_id, { imageURL: imageURL });

  res.status(200).json(imageURL);
};

module.exports = updatePetImage;
