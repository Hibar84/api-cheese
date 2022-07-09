const {
    validateCheeseData,
  } = require("../validations/cheese");

const { db } = require("../../utils/admin");
const cheeses = db.collection("cheeses");

// Fonction de création d'un fromage
exports.createCeese = (req, res) => {
    const newCheese = {
        name: req.body.name,
        url: req.body.url,
        url_title: req.body.url_title,
        img: req.body.img,
        geo: req.body.geo,
        country: req.body.country,
        milk: req.body.milk,
        curd: req.body.curd,
        aoc: req.body.aoc,
        aoc_year: req.body.aoc_year
    };
    
    const { valid, errors } = validateCheeseData(newCheese);
    if (!valid) return res.status(400).json(errors);
    
    cheeses
        .add(newCheese)
        .then((doc) => {
            res.status(201).json({ message: `Cheese ${doc.id} created successfully` });
        })
        .catch((err) => {
            res.status(500).json({ error: "Something went wrong" });
            console.error(err);
        });
};

// Fonction de modifier d'un fromage
exports.modifyCheese = (req, res) => {
    const newCheese = {
        name: req.body.name,
        url: req.body.url,
        url_title: req.body.url_title,
        img: req.body.img,
        geo: req.body.geo,
        country: req.body.country,
        milk: req.body.milk,
        curd: req.body.curd,
        aoc: req.body.aoc,
        aoc_year: req.body.aoc_year
    };
    
    const { valid, errors } = validateCheeseData(newCheese);
    if (!valid) return res.status(400).json(errors);
    
    const document = cheeses.doc(req.params.idCheese);
    
    document
        .update(newCheese)
        .then(() => {
            return res.json({ message: "Cheese modified succesfully" });
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        });
};

// Fonction de lecture d'un fromage
exports.getOneCheese = (req, res) => {
    const document = cheeses.doc(req.params.idCheese);
    
    document
    .get()
    .then((doc) => {
        let fromage = {
            idCheese: doc.id,
            ...doc.data(),
        };
        return res.json(fromage);
    })
    .catch((err) => console.error(err));
};

// Lecture de tous les fromages
exports.getAllCheese = (req, res) => {
    cheeses
    .get()
    .then((data) => {
        let fromages = [];
        data.forEach((doc) => {
            fromages.push({
                idCheese: doc.id,
                ...doc.data(),
            });
        });
        return res.json(fromages);
    })
    .catch((err) => console.error(err));
};

// Fonction de suppression d'un fromage
exports.deleteCheese = (req, res) => {
    const document = cheeses.doc(req.params.idCheese);
    
    document
    .get()
    .then((doc) => {
        if (!doc.exists) {
            return res.status(404).json({ error: "Cheese not found" });
        } else {
            return document.delete();
        }
    })
    .then(() => {
        res.json({ message: "Cheese deleted successfully" });
    })
    .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
    });
};