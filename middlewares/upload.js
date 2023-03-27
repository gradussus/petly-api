// const multer = require("multer");
// const path = require("path");

// // const tempDir = path.join(__dirname, "../", "temp");
// const multerConfig = multer.diskStorage({
//   // destination: (req, file, cb) => {
//   //   cb(null, tempDir);
//   // },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
//   limits: {
//     fileSize: 2048000,
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({
//   storage: multerConfig,
//   fileFilter: fileFilter,
// });

// module.exports = upload;
