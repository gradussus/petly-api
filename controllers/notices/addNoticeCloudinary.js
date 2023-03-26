const { Notice } = require("../../schemas/noticeModel");

const addNotice = async (req, res) => {
  const owner = req.user.id;
  const noticeData = req.body;
  const data = !!req.file
    ? { imageURL: req.file.path, owner, ...noticeData }
    : { owner, ...noticeData };

  const newNotice = await Notice.create(data);
  // .then((pet) => {
  //   if (pet) {
  //     User.findByIdAndUpdate(owner, { $push: { userPets: pet._id } })
  //       .then((user) => {
  //         if (user) {
  //           res.status(201).json({ success: true, pet });
  //         }
  //       })
  //       .catch((err) => {
  //         throw new Error(err);
  //       });
  //   }
  // })
  // .catch((err) =>
  //   res.status(400).json({ success: false, error: err, message: err.message })
  // );

  res.status(201).json(newNotice);
};

module.exports = addNotice;
