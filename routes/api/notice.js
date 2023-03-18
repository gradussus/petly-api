const express = require("express");
const router = express.Router();

const { getNotice } = require("../../models/notice");
const { controllerWrapper } = require("../../helpers/apiHelpers");

router.get("/", controllerWrapper(getNotice));

module.exports = router;
