const { News } = require("../../schemas/newsModel");

const getNewsBySearch = async (req, res) => {
  const { qwery } = req.params;
  //const { qwery } = req.query;

  const data = await News.find({
    title: { $regex: qwery, $options: "i" },
  }).sort({ date: -1 });

  if (data.length === 0) {
    res.json({
      message: "Not found",
    });
  }

  res.status(200).json(data);
};

module.exports = getNewsBySearch;
