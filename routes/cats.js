const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats");

router.get("/", catsController.getAllCats);
router.get("/:id", catsController.getOneCat);
router.post("/", catsController.addOneCat);
router.patch("/:id", catsController.updateOneCat);
router.delete("/:id", catsController.removeOneCat);

module.exports = router;
