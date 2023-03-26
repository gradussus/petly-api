const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const {
  isValidId,
  authenticate,
  validation,
  uploadCloud,
} = require("../../middlewares");
const {
  addNotice,
  getAllNotices,
  getNoticesByCategory,
  getNoticesBySearch,
  getNoticeById,
  getPersonalNotices,
  deletePersonalNotice,
  addToFavoriteList,
  removeFromFavoriteList,
  getFavoriteList,
} = require("../../controllers/notices");
const { joiNoticeAddSchema } = require("../../schemas/validationJoi");
const changeImg = require("../../controllers/notices/changeImg");

router.post(
  "/create",
  authenticate,
  uploadCloud.single("image"),
  validation(joiNoticeAddSchema),
  controllerWrapper(addNotice)
);
router.get("/", controllerWrapper(getAllNotices));
router.get("/own", authenticate, controllerWrapper(getPersonalNotices));

router.post(
  "/add_favorite/:id",
  authenticate,
  isValidId,
  controllerWrapper(addToFavoriteList)
);

router.post(
  "/remove_favorite/:id",
  authenticate,
  isValidId,
  controllerWrapper(removeFromFavoriteList)
);

router.get("/favorite", authenticate, controllerWrapper(getFavoriteList));

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

//router.get("/search/:qwery", controllerWrapper(getNoticesBySearch));

router.get("/find_notice/:id", isValidId, controllerWrapper(getNoticeById));

router.delete(
  "/delete/:id",
  authenticate,
  isValidId,
  controllerWrapper(deletePersonalNotice)
);

router.patch(
  "/find_notice/:id",
  isValidId,
  uploadCloud.single("image"),
  controllerWrapper(changeImg)
);

module.exports = router;
