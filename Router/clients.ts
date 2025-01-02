// Import the Router class from the Express.js framework
import { Router } from "express";

// Import the clientsController module, which contains functions to handle client-related routes
import clientsController from "../Controller/clientsController";

// Create a new instance of the Router class
const router = Router();

// This route is handled by the index function in the clientsController module
router.get('/clientes/', clientsController.index);

// This route is handled by the show function in the clientsController module
// The ':id' part of the endpoint is a route parameter that captures the ID of the client
router.get('/clientes/:id', clientsController.show);

// This route is handled by the create function in the clientsController module
router.get("/clientes/create", clientsController.create);

// This route is handled by the store function in the clientsController module
router.post("/clientes/create", clientsController.store);

// This route is handled by the edit function in the clientsController module
router.get("/clientes/edit/:id", clientsController.edit);

// This route is handled by the update function in the clientsController module
router.post("/clientes/edit/:id", clientsController.update);

// This route is handled by the del function in the clientsController module
router.get("/clientes/del/:id", clientsController.del);

// This route returns a simple response with the text "Opções de carreira"
router.get("/clientes/trabalheconosco", (req, res) => {
    res.send("Opções de carreira");
});

// Export the router instance
export default router;