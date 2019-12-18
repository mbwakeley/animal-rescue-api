const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animals");

router.get("/", animalsController.getAllAnimals);
router.get("/:id", animalsController.getOneAnimal);
router.post("/", animalsController.addOneAnimal);
router.patch("/:id", animalsController.updateOneAnimal);
router.delete("/:id", animalsController.removeOneAnimal);

module.exports = router;
