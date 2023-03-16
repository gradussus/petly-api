const app = require("./app");
require("dotenv").config();
const { connectMongo } = require("./db/connection");

const start = async () => {
  try {
    await connectMongo();

    app.listen(3000, (error) => {
      if (error) {
        console.error("Error at server", error);
      }
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (error) {
    console.error(`Failed to launch app with error: ${error.message}`);
  }
};
start();
