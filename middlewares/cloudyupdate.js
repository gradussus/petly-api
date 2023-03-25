const cloudinary = require("cloudinary").v2;

const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadImage = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    transformation: [{ height: 328, width: 328, crop: "crop" }],
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    return result.url;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { uploadImage };
