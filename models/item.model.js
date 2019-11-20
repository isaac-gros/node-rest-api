const mongoose = require('mongoose');

// Modèle d'un Item
const ItemSchema = mongoose.Schema({
    type: Number, // le type de l'item (pour ranger les différents items)
    type_text: String, // le nom du type de l'item sous forme de slug
    title: String, // titre de l'item
    recipe: {
        type: mongoose.Schema.ObjectId,
        ref: 'Recipe'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', ItemSchema);