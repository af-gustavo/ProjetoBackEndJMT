// Import required modules from Express.js
import { Request, Response } from "express";

// Import the IClients interface from the clients model
import { IClients } from "../Model/clients";

// Import the clientsModel module, which contains functions to handle client-related database operations
import clientsModel from "../Model/clientsModel";

//Handles the index route by retrieving all clients from the database and returning them as JSON.
async function index(req: Request, res: Response, next: any) {
    // Retrieve all clients from the database
    const clients = await clientsModel.findAll();
    // Return the clients as JSON
    res.json(clients);
}

//Handles the show route by retrieving a single client from the database by ID and returning it as JSON.
async function show(req: Request, res: Response, next: any) {
    // Retrieve a single client from the database by ID
    const client = await clientsModel.findByPk(req.params.id);
    // Return the client as JSON
    res.json(client);
}

//Handles the create route by rendering the create client page.
async function create(req: Request, res: Response, next: any) {
    // Render the create client page
    res.render("Create");
}

//Handles the store route by creating a new client in the database.
async function store(req: Request, res: Response, next: any) {
    try {
        // Create a new client in the database
        let client = req.body as IClients;
        await clientsModel.create({ ...client });
        // Redirect to the root URL
        res.redirect("/");
    } catch (err) {
        // Log any errors that occur during client creation
        console.error(err);
        // Return a 500 error response
        res.status(500).send("Error creating client");
    }
}

// Handles the edit route by retrieving a single client from the database by ID and rendering the edit client page.
async function edit(req: Request, res: Response, next: any) {
    // Retrieve a single client from the database by ID
    const client = await clientsModel.findByPk(req.params.id);
    // Render the edit client page with the client data
    res.render("edit", { client: client });
}

//Handles the update route by updating a client in the database.
async function update(req: Request, res: Response, next: any) {
    // Update the client in the database
    await clientsModel.update(req.body as IClients, {
        where: {
            id: req.params.id
        }
    });
    // Redirect to the root URL
    res.redirect("/");
}

//Handles the delete route by deleting a client from the database.
async function del(req: Request, res: Response, next: any) {
    // Delete the client from the database
    await clientsModel.destroy({
        where: {
            id: req.params.id
        }
    });
    // Redirect to the root URL
    res.redirect("/");
}

// Export the client controller functions as the default export
export default { index, create, store, show, edit, update, del };