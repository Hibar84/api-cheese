const express = require("express");
const router = express.Router();
const {
    createCheese,
    modifyCheese,
    getOneCheese,
    getAllCheese,
    deleteCheese,
} = require("../controllers/cheese");

// Création d'un fromage
router.route("/").post(createCheese);

// Modification d'un fromage
router.route("/:idCheese").put(modifyCheese);

// Lecture d'un fromage connaissant son ID
router.route("/:idCheese").get(getOneCheese);

// Lecture de tous les fromages
router.route("/").get(getAllCheese);

// Suppression d'un fromage
router.route("/:idCheese").delete(deleteCheese);

module.exports = router;