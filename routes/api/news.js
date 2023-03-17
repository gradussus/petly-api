const express = require("express");
const router = express.Router();

const { getNews } = require("../../models/news");
const { asyncWrapper } = require("../../helpers/apiHelpers");

router.get("/news", asyncWrapper(getNews));

module.exports = router;
