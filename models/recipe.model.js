const mongoose = require('mongoose');

// Modèle d'une recette
const RecipeSchema = mongoose.Schema({
    items: [{ // Les items nécessaire à la création de la recette
        type: mongoose.Schema.ObjectId,
        ref: 'Item'
    }],
    pattern: Array, // Le schéma à suivre pour crafter l'item
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', RecipeSchema);