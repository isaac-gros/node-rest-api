// Configuration MongoDB
// 1 - Installer le fichier MSI MongoDB
// 2 - Ajouter le path des fichiers bin de MongoDB dans les variables d'environnement
// 3 - Dans un terminal, lancer la commande "mongo"
// 4 - Dans le même terminal, taper la commande "use minecraft-api" pour créer la base de données

module.exports = {
    url: 'mongodb://localhost:27017/minecraft-api'
}