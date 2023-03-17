const { newsService } = require("../services/newsService");

const getNews = async (_, res) => {
  const news = await newsService();
  res.json(news);
};

module.exports = {
  getNews,
};
