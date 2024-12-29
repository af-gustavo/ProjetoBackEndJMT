import { Request, Response } from "express";
import { IUsers } from "../Model/users";
import clientsModel from "../Model/usersModel";

function login(req: Request, res: Response, next: any) {
    res.render("login");
}

async function checkLogin(req: Request, res: Response, next: any) {
    const login = req.body as IUsers;

    try {
        let logado = await clientsModel.findOne({
            where: {
                user: login.user,
                password: login.password
            }
        });
    
        if (logado != null) {
            res.redirect("/clientes");
            process.env.APP_LOGIN = "1"
        } else {
            // console.log("Erro ao logar");
            res.render("login", {login: 0});
            throw new Error("Erro ao logar");
        }
    } catch (erro) {
        console.log(erro);
        res.status(500).end();
    }
    
}

export default { login, checkLogin };