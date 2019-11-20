module.exports = (app) => {
  const item = require('../controllers/item.controller.js');

  // Create a new Note
  app.post('/item', item.create);

  // Retrieve all Notes
  app.get('/item', item.findAll);

  // Retrieve a single Note with noteId
  app.get('/item/:itemId', item.findOne);

  // Update a Note with noteId
  app.put('/item/:itemId', item.update);

  // Delete a Note with noteId
  app.delete('/item/:itemId', item.delete);
}