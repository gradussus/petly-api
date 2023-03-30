const { News } = require("../../schemas/newsModel");

const getNewsBySearch = async (req, res) => {
  const { qwery } = req.params;

  const data = await News.find({
    title: { $regex: qwery, $options: "i" },
  }).sort({ date: -1 });

  res.status(200).json(data);
};

module.exports = getNewsBySearch;
