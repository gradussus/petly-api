const { Router } = require("express");
const { controllerWrapper } = require("../../helpers/apiHelpers");
const { googleAuth, googleRedirect } = require("../../controllers/google/auth");

const router = Router();

router.get("/google", controllerWrapper(googleAuth));
router.get("/google-redirect", controllerWrapper(googleRedirect));

module.exports = router;
