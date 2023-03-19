const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const { isValidId, authenticate } = require("../../middlewares");
const {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
  getNoticeById,
} = require("../../models/notices");

router.post("/create", authenticate, controllerWrapper(addNotice));
router.get("/", controllerWrapper(getAllNotices));

router.get("/:categoryName", controllerWrapper(getNoticesByCategory));

//router.get(
//  "/category/:category",
//  isValidCategory,
//  controllerWrapper(getNoticesByCategory)
//);

router.get(
  "/search/:categoryName/:qwery",
  controllerWrapper(getNoticesBySearch)
);

router.get(
  "/find_notice/:id",
  isValidId("id"),
  controllerWrapper(getNoticeById)
);
module.exports = router;
