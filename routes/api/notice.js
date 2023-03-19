const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const { isValidId } = require("../../middlewares");
const {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
  getNoticeById,
} = require("../../models/notices");

router.post("/create", controllerWrapper(addNotice));
router.get("/", controllerWrapper(getAllNotices));

router.get("/category/:categoryName", controllerWrapper(getNoticesByCategory));

//router.get(
//  "/category/:category",
//  isValidCategory,
//  controllerWrapper(getNoticesByCategory)
//);

router.get(
  "/search/:categoryName/:qwery",
  controllerWrapper(getNoticesBySearch)
);

router.get("/:id", isValidId("id"), controllerWrapper(getNoticeById));
module.exports = router;
