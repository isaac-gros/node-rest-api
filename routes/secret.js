const jwt = require('jsonwebtoken');
const fs = require('fs');

// Détection de l'autorisation
function isAuthenticated(req, res, next) {

    console.log(req.headers);

    if (typeof req.headers.authorization !== "undefined") {
        
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync('./ssh/key.pem', 'utf8');

        console.log(privateKey);
        
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            
            // if there has been an error...
            if (err) {  
                // shut them out!
                res.status(500).json({ error: err.message });
                throw new Error("Non autorisé");
            }
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next();
        });
    } else {
        // No authorization header exists on the incoming
        // request, return not authorized and throw a new error 
        res.status(500).json({ error: "Accès non autorisé" });
        throw new Error("Non autorisé");
    }
}

module.exports = (app) => {
    
    // Récupère tous les éléments secrets
    app.get('/secrets', isAuthenticated, (req, res) => {
        res.send({ "message" : "Vous voyez ce message car vous êtes authentifiés. Félicitations !"})
    });
}