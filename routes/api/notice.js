const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
} = require("../../models/notices");

router.post("/create", controllerWrapper(addNotice));
//router.get("/", controllerWrapper(getAllNotices));
router.get("/:categoryName", controllerWrapper(getNoticesByCategory));

//router.get(
//  "/category/:category",
//  isValidCategory,
//  controllerWrapper(getNoticesByCategory)
//);

router.get("/:categoryName/:qwery", controllerWrapper(getNoticesBySearch));

module.exports = router;
