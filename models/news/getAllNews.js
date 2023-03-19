const { News } = require("../../schemas/newsModel");

const getAllNews = async (_, res) => {
  const news = await News.find().sort({ date: -1 });
  //const news = await News.find();

  if (news.length === 0) {
    res.json({
      code: 404,
      message: "Not found",
    });
  }

  res.status(200).json(news);
};

module.exports = getAllNews;
