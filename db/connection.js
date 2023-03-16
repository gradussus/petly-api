const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = { connectMongo };
