const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const { addPet, deletePet, getAllUserPets } = require("../../controllers/pets");
const { joiPetSchema } = require("../../schemas/validationJoi");
const { validation, authenticate } = require("../../middlewares");

router.post(
  "/create",
  authenticate,
  validation(joiPetSchema),
  controllerWrapper(addPet)
);

router.delete("/:id", authenticate, controllerWrapper(deletePet));

router.get("/allUserPets", authenticate, controllerWrapper(getAllUserPets));

module.exports = router;
