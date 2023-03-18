const express = require("express");

const { controllerWrapper } = require("../../helpers/apiHelpers");
const { auth: controller } = require("../../controllers");
const { joiUserSchema, joiLoginSchema } = require("../../schemas/userModel");
const { validation } = require("../../middlewares");
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

module.exports = router;
