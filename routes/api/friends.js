const express = require("express");
const router = express.Router();

const { getFriends } = require("../../controllers/friends/getFriends");
const { controllerWrapper } = require("../../helpers/apiHelpers");

router.get("/", controllerWrapper(getFriends));

module.exports = router;
