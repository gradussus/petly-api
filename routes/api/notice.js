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
  getPersonalNotices,
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

router.get(
  "/own/:categoryName",
  authenticate,
  controllerWrapper(getPersonalNotices)
);

module.exports = router;
