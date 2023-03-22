const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const addPet = require("../../controllers/pets/addPet");
const { joiPetSchema } = require("../../schemas/validationJoi");
const { validation, authenticate } = require("../../middlewares");

router.post(
  "/create",
  authenticate,
  validation(joiPetSchema),
  controllerWrapper(addPet)
);

module.exports = router;
