const Recipe = require('../models/recipe.model.js');

// Création et sauvegarde d'un  nouvel Item
exports.create = (req, res) => {

    console.log(req.body.items);

    // Validation de la requête
    if((req.body.pattern).length !== 3 || !req.body.items || !req.body.outputItem) {
        return res.status(400).send({
            message: "La recette contient un ou plusieurs champs invalides. Vérifier que les champs type, type_text, title soient renseignés. "
        });
    }

    // Création d'une nouvelle requête
    const recipe = new Recipe({
        items: req.body.items, // les items utilisés pour faire la recette
        outputItem: req.body.outputItem,
        pattern: req.body.pattern, // le schéma à suivre pour crafter l'item
    });

    // Sauvegarde l'item
    recipe.save().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erreur serveur lors de la création de la recette."
        });
    });
};

// Retourne tous les items de la base de données.
exports.findAll = (req, res) => {

    Recipe.find().populate(["items", "outputItem"]).then(recipes => {
        res.send(recipes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erreur serveur lors de la récupération des items."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

    Item.findById(req.params.recipeId).then(recipe => {
        if(!recipe) {
            return res.status(404).send({
                message: "La recette portant l'ID  " + req.params.recipeId + " est introuvable."
            });            
        }
        res.send(item);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "La recette portant l'ID  " + req.params.recipeId + " est introuvable."
            });                
        }
        return res.status(500).send({
            message: "Erreur serveur lors de la récupération de la recette portant l'ID  " + req.params.recipeId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    //TODO
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    //TODO
};