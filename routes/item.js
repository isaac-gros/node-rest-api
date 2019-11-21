module.exports = (app) => {
  const item = require('../controllers/item.controller.js');

  // Create a new Note
  app.post('/items', item.create);

  // Retrieve all Notes
  app.get('/items', item.findAll);

  // // Retrieve a single Note with noteId
  app.get('/items/:itemId', item.findOne);

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