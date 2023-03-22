const express = require("express");

const { controllerWrapper } = require("../../helpers/apiHelpers");
const { auth: controller } = require("../../controllers");
const {
  joiUserSchema,
  joiLoginSchema,
  joiUpdatedUserSchema,
} = require("../../schemas/validationJoi");
const { validation, authenticate } = require("../../middlewares");
const router = express.Router();

router.post(
  "/register",
  validation(joiUserSchema),
  controllerWrapper(controller.register)
);

router.post(
  "/login",
  validation(joiLoginSchema),
  controllerWrapper(controller.login)
);

router.post("/logout", authenticate, controllerWrapper(controller.logout));

router.patch(
  "/updateUser",
  authenticate,
  validation(joiUpdatedUserSchema),
  controllerWrapper(controller.updateUser)
);

router.get(
  "/currentUser",
  authenticate,
  controllerWrapper(controller.currentUser)
);

module.exports = router;
