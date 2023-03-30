const { News } = require("../../schemas/newsModel");

const getAllNews = async (_, res) => {
  const news = await News.find().sort({ date: -1 });

  res.status(200).json(news);
};

module.exports = getAllNews;
