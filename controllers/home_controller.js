// Gestionnaire pour la route "/"
function index(req, res) {
    res.end("This is home page");
}

// Gestionnaire pour la route "/store"
function store(req, res) {
    res.end("This is store page");
}


module.exports = {index,store};

