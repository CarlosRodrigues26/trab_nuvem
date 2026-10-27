const express = require("express");
const siteController = require("../controllers/siteController");

const router = express.Router();

router.get("/", siteController.home);
router.get("/sobre", siteController.about);
router.get("/contato", siteController.contact);

module.exports = router;
