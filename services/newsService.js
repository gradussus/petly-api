const { News } = require("../schemas/newsModel");

const newsService = async () => {
  const news = await News.find();
  return news;
};
