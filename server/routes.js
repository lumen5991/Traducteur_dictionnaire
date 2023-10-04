const homeController = require("../controllers/home_controller");

// classe Route pour gérer les routes
class Route {
    constructor() {
        // objet vide pour stockage des routes
        this.routes = {};
    }

    // Méthode pour ajouter une route GET
    get(path, handler) {
       
        this.routes[`GET ${path}`] = handler;
    }
    post(path, handler) {
    
        this.routes[`POST ${path}`] = handler;
    }

    resolve(req, res) {
      
        const { url, method } = req;
        //clé de route en concaténant la méthode HTTP et l'URL
        const routeKey = `${method} ${url}`;
        //route correspondant à la clé
        const handler = this.routes[routeKey];

        if (!handler) {
            // Si aucun gestionnaire n'est trouvé, renvoie une réponse 404
            res.writeHead(404);
            res.end("404 Not Found");
            return;
        }

        handler(req, res);
    }
}

// Créez une instance de la classe Route
const route = new Route();

// Définition des routes get
route.get("/store", homeController.store);
route.get("/", homeController.index);
route.get("/about", (req, res) => {
    res.end("This is about page");
});

// Définition des routes path

route.post("/store", homeController.store);
route.post("/", homeController.index);
route.post("/about", (req, res) => {
    res.end("This is about page");
});


module.exports = route;
