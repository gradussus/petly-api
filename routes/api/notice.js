const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const { addNotice, getAllNotices } = require("../../models/notices");

router.post("/create", controllerWrapper(addNotice));
router.get("/", controllerWrapper(getAllNotices));

//router.get(
//  "/category/:category",
//  isValidCategory,
//  controllerWrapper(getNoticesByCategory)
//);

module.exports = router;
