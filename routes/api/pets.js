const express = require("express");
const router = express.Router();

const { controllerWrapper } = require("../../helpers/apiHelpers");
const {
  addPet,
  deletePet,
  getAllUserPets,
  updatePetImage,
} = require("../../controllers/pets");
const { joiPetSchema } = require("../../schemas/validationJoi");
const { validation, authenticate, uploadCloud } = require("../../middlewares");

router.post(
  "/create",
  authenticate,
  uploadCloud.single("image"),
  validation(joiPetSchema),
  controllerWrapper(addPet)
);

router.delete("/:id", authenticate, controllerWrapper(deletePet));

router.get("/allUserPets", authenticate, controllerWrapper(getAllUserPets));

router.patch(
  "/updateImage",
  authenticate,
  uploadCloud.single("image"),
  controllerWrapper(updatePetImage)
);

module.exports = router;
