const express = require("express");
const router = express.Router();
const dogsController = require("../controllers/dogs");

router.get("/", dogsController.getAllDogs);
router.get("/:id", dogsController.getOneDog);
router.post("/", dogsController.addOneDog);
router.patch("/:id", dogsController.updateOneDog);
router.delete("/:id", dogsController.removeOneDog);

module.exports = router;
