const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

const News = mongoose.model("news", newsSchema);

module.exports = {
  News,
};
