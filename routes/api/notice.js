const express = require("express");
const router = express.Router();

const addNotice = require("../../services/notices/addNotice");
const { controllerWrapper } = require("../../helpers/apiHelpers");

router.post("/create", controllerWrapper(addNotice));

module.exports = router;
