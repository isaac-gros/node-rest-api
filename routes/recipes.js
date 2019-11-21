module.exports = (app) => {
    const recipe = require('../controllers/recipe.controller.js');
  
    // Recherche une recette
    app.post('/recipes', recipe.create);
  
    // Récupère toutes les recettes
    app.get('/recipes', recipe.findAll);
  
    // Récupère une note individuelle par un ID
    app.get('/recipes/:itemId', recipe.findOne);
  
    //
    //
    // TODO
    //
    //
    // // Update a Note with noteId
    // app.put('/item/:itemId', item.update);
  
    // // Delete a Note with noteId
    // app.delete('/item/:itemId', item.delete);
  }