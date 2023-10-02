var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url.startsWith('/word=')) {
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
    } else {
      res.writeHead(404, { "content-Type": "application/json" });
      res.end(JSON.stringify({ error: 'TRADUCTION NON TROUVEE.' }));
    }
  } else {
    res.writeHead(404, { "content-Type": "application/json" });
    res.end(JSON.stringify({ error: 'Non trouvé' }));
  }
});

function translateWord(word) {
  const translation = {
    "anglais": "english",
    "toi": "you",
    "moi": "me",
    "salut": "hello",

    "english": "anglais",
    "you": "toi",
    "me": "moi",
    "hello": "salut"
  };

  return translation[word] || null;
}

server.listen(8002, function () {
  console.log("Server is running at 8002");
});
