const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const { addPet, deletePet, getAllUserPets } = require("../../controllers/pets");
const { joiPetSchema } = require("../../schemas/validationJoi");
const {
  validation,
  authenticate,
  upload,
  uploadCloud,
} = require("../../middlewares");

router.post(
  "/create",
  authenticate,
  uploadCloud.single("pet"),
  validation(joiPetSchema),
  controllerWrapper(addPet)
);

router.delete("/:id", authenticate, controllerWrapper(deletePet));

router.get("/allUserPets", authenticate, controllerWrapper(getAllUserPets));

module.exports = router;
