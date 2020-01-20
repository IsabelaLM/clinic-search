const { Router } = require("express");
const ClinicController = require("./controllers/ClinicController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, Ordenação, Paginação, etc...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

routes.get("/clinics", ClinicController.index);
routes.post("/clinics", ClinicController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
