const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const authRouter = require("./routes/api/auth");
const newsRouter = require("./routes/api/news");
const friendsRouter = require("./routes/api/friends");
const noticeRouter = require("./routes/api/notice");
const petsRouter = require("./routes/api/pets");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const { errorHandler } = require("./helpers/apiHelpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/auth", authRouter);
app.use("/news", newsRouter);
app.use("/friends", friendsRouter);
app.use("/notices", noticeRouter);
app.use("/api/pets", petsRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
