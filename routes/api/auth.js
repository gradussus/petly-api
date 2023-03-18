const express = require("express");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const { auth: controller } = require("../../controllers");
const { joiUserSchema } = require("../../schemas/userSchema");
const { validation } = require("../../middlewares");
const router = express.Router();

router.post(
  "/register",
  // validation(joiUserSchema),
  asyncWrapper(controller.register)
);
module.exports = router;
