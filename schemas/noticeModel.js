const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema();
//   {
//     topic: {
//       type: String,
//       required: true,
//     },
//     text: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: String,
//       required: true,
//     },
//   },
//   { versionKey: false }

const Notice = mongoose.model("notices", noticeSchema);

module.exports = {
  Notice,
};
