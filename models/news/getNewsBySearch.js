const { News } = require("../../schemas/newsModel");

const getNewsBySearch = async (req, res) => {
  const { qwery } = req.params;
  //const { qwery } = req.query;

  const data = await News.find({
    title: { $regex: qwery, $options: "i" },
  }).sort({ date: -1 });

  if (data.length === 0) {
    res.json({
      code: 404,
      message: "Not found",
    });
  }

  // res.json({
  //   code: 200,
  //   status: "success",
  //   data: notices,
  // });

  res.status(200).json(data);
};

module.exports = getNewsBySearch;
