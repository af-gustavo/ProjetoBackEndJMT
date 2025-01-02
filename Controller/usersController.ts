// Import required modules from Express.js
import { Request, Response } from "express";

// Import the IUsers interface from the users model
import { IUsers } from "../Model/users";

// Import the usersModel module, which contains functions to handle user-related database operations
import clientsModel from "../Model/usersModel";

// Handles the login route by rendering the login page.
function login(req: Request, res: Response, next: any) {
    // Render the login page
    res.render("login");
}

//Handles the check login route by verifying the user's credentials.
async function checkLogin(req: Request, res: Response, next: any) {
    // Cast the request body to the IUsers interface
    const login = req.body as IUsers;

    try {
        // Find a user in the database with the provided username and password
        let logado = await clientsModel.findOne({
            where: {
                user: login.user,
                password: login.password
            }
        });
    
        // If a user is found, redirect to the clientes page and set the APP_LOGIN environment variable
        if (logado != null) {
            res.redirect("/clientes");
            process.env.APP_LOGIN = "1"
        } else {
            // If no user is found, render the login page with an error message
            res.render("login", {login: 0});
            throw new Error("Erro ao logar");
        }
    } catch (erro) {
        // Log any errors that occur during the login process
        console.log(erro);
        // Return a 500 error response
        res.status(500).end();
    }
    
}

// Export the login and checkLogin functions as the default export
export default { login, checkLogin };