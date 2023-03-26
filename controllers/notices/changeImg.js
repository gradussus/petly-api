const { Notice } = require("../../schemas/noticeModel");

const changeImg = async (req, res) => {
  const { id } = req.params;
  console.log(req.file.path);
  const imageURL = req.file.path;
  console.log(imageURL);

  const result = await Notice.findByIdAndUpdate(id, { imageURL: imageURL });

  res.status(200).json(result);
};
module.exports = changeImg;
