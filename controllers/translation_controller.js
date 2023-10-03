// controllers/translation_controller.js

const translateWord  = require("../dico".translateWord);
const translation  = require("../dico".translation);

// Gestionnaire pour la traduction d'un mot
function translate(req, res) {
    if (req.method === 'GET' || req.method === 'POST' && req.url.startsWith('/word=')) {
        // Extrait le mot à traduire de l'URL en prenant tout ce qui se trouve après le signe égal (=)
        const inputWord = req.url.split('=')[1];

        if (!inputWord) {
            res.writeHead(400, { "content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Veuillez entrer un mot s'il vous plaît." }));
            return;
        }

        const translationResult = translateWord(inputWord);

        if (translationResult) {
            res.writeHead(200, { "content-Type": "application/json" });
            res.end(JSON.stringify({ translation: translationResult }));
        } else {
            res.writeHead(404, { "content-Type": "application/json" });
            res.end(JSON.stringify({ error: 'TRADUCTION NON TROUVÉE.' }));
        }
    } else {
        res.writeHead(404, { "content-Type": "application/json" });
        res.end(JSON.stringify({ error: 'Non trouvé' }));
    }
}

module.exports = {
    translate
};
