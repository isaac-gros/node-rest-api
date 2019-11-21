const Item = require('../models/item.model.js');

// Création et sauvegarde d'un  nouvel Item
exports.create = (req, res) => {

    // Validation de la requête
    if(!isFinite(req.body.type) || !req.body.type_text || !req.body.title) {
        return res.status(400).send({
            message: "L'item contient un ou plusieurs champs vides. Vérifier que les champs type, type_text, title soient renseignés. "
        });
    }

    // Création d'une nouvelle requête
    const item = new Item({
        type: req.body.type, // le type de l'item (pour ranger les différents items)
        type_text: req.body.type_text, // le nom du type de l'item sous forme de slug
        title: req.body.title, // titre de l'item
    });

    // Sauvegarde l'item
    item.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erreur serveur lors de la création de l'item."
        });
    });
};

// Retourne tous les items de la base de données.
exports.findAll = (req, res) => {

    Item.find().then(items => {
        res.send(items);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erreur serveur lors de la récupération des items."
        });
    });
};

// Find a single item with a itemId
exports.findOne = (req, res) => {

    Item.findById(req.params.itemId).then(item => {
        if(!item) {
            return res.status(404).send({
                message: "L'item portant l'ID  " + req.params.itemId + " est introuvable."
            });            
        }
        res.send(item);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "L'item portant l'ID  " + req.params.itemId + " est introuvable."
            });                
        }
        return res.status(500).send({
            message: "Erreur serveur lors de la récupération de l'item portant l'ID  " + req.params.itemId
        });
    });
};

// Update a item identified by the itemId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Item content can not be empty"
        });
    }

    // Find item and update it with the request body
    Item.findByIdAndUpdate(req.params.itemId, {
        type: req.body.type || "Untitled Item", // le type de l'item (pour ranger les différents items)
        type_text: req.body.type_text, // le nom du type de l'item sous forme de slug
        title: req.body.title, // titre de l'item
    }, {new: true})
        .then(item => {
            if(!item) {
                return res.status(404).send({
                    message: "Item not found with id " + req.params.itemId
                });
            }
            res.send(item);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Item not found with id " + req.params.itemId
            });
        }
        return res.status(500).send({
            message: "Error updating item with id " + req.params.itemId
        });
    });
};

// Delete a item with the specified itemId in the request
exports.delete = (req, res) => {
    //TODO
};