const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "notice",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
