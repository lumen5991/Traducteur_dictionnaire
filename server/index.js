var http = require("http");
var handler = require("./handler")
var server = http.createServer(handler);

module.exports = server



/* 
var translateWord = require("./dico").translateWord

var translation = require("./dico").translation

if (req.method === 'GET' || req.method === 'POST' && req.url.startsWith('/word=')) {

  /* extrait le mot à traduire de l'URL en
   prenant tout ce qui se trouve après le signe égal ( =) dans l'URL. 
  var inputWord = req.url.split('=')[1];

  if (!inputWord) {
    res.writeHead(400, { "content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Veuillez entrer un mot s'il vous plait." }));
    return;
  }

  var translationResult = translateWord(inputWord);

  if (translationResult) {
    res.writeHead(200, { "content-Type": "application/json" });
    res.end(JSON.stringify({ translation: translationResult }));
  } 
    else {
    res.writeHead(404, { "content-Type": "application/json" });
    res.end(JSON.stringify({ error: 'TRADUCTION NON TROUVEE.' }));
  }
} else {
  res.writeHead(404, { "content-Type": "application/json" });
  res.end(JSON.stringify({ error: 'Non trouvé' }));
}
 */
