const { Pet } = require("../../schemas/petModel");
const { User } = require("../../schemas/userModel");
const { uploadImage } = require("../../middlewares");

const addPet = async (req, res) => {
  // const owner = req.user.id;

  // const avatarURL = await uploadImage(req.file.path);
  // console.log(req.body);
  // const data = !!req.file
  //   ? { ...req.body, owner, imageURL: avatarURL }
  //   : { ...req.body, owner };

  // console.log(data);

  // const newPet = await Pet.create(data);
  // console.log(newPet);

  // res.status(201).json({ data: newPet });

  // const { _id } = req.user;
  // const avatarURL = await uploadImage(req.file.path);
  // const newPet = await Pet.create({
  //   ...req.body,
  //   owner: _id,
  //   imageURL: avatarURL,
  // });

  // res.status(201).json({ data: newPet });

  // const owner = req.user.id;
  // const petData = req.body;
  // const data = !!req.file
  //   ? { imageURL: req.file.path, owner, ...petData }
  //   : { owner, ...petData };

  // const newPet = await Pet.create(data);
  // console.log(newPet);
  // res.status(201).json(newPet);

  const owner = req.user.id;
  const petData = req.body;
  // const avatarURL = await uploadImage(req.file.path);
  const data = !!req.file
    ? { imageURL: req.file.path, owner, ...petData }
    : { owner, ...petData };

  const newPet = await Pet.create(data);

  res.status(201).json({ data: newPet });
};

module.exports = addPet;
