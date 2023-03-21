const express = require("express");
const router = express.Router();

const { getFriends } = require("../../models/friends/friends");
const { controllerWrapper } = require("../../helpers/apiHelpers");

router.get("/", controllerWrapper(getFriends));

module.exports = router;
