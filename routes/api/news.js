const express = require("express");
const router = express.Router();

const { getNews } = require("../../models/news");
const { controllerWrapper } = require("../../helpers/apiHelpers");

router.get("/", controllerWrapper(getNews));

module.exports = router;
