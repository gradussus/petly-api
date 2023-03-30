const express = require("express");
const router = express.Router();
const { controllerWrapper } = require("../../helpers/apiHelpers");
const { getAllNews, getNewsBySearch } = require("../../controllers/news");

router.get("/", controllerWrapper(getAllNews));

router.get("/search/:qwery", controllerWrapper(getNewsBySearch));

module.exports = router;
