const { Notice } = require("../../schemas/noticeModel");

const addNotice = async (req, res) => {
  //const newNotice = await Notice.create({ ...req.body });

  const { categoryName } = req.params;
  const { body } = req;
  const { _id } = req.user;

  console.log(req);
  console.log(_id);

  const newNotice = await Notice.create({
    ...body,
    photoURL: req?.file?.path,
    category: categoryName,
    owner: _id,
  });

  //const notice = await newNotice.populate("owner", "email, phone");

  res.status(201).json({
    code: 201,
    status: "success",
    data: newNotice,
    //data: notice,
  });
};

module.exports = addNotice;
