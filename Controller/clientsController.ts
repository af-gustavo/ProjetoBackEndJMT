import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index(req: Request, res: Response, next: any) {
    // res.render("index");
    const clients = await clientsModel.findAll();
    res.json(clients);
}

async function show(req: Request, res: Response, next: any) {
    // res.render("index");
    const client = await clientsModel.findByPk(req.params.id);
    res.json(client);
}

async function create(req: Request, res: Response, next: any) {
    res.render("Create");
}

async function store(req: Request, res: Response, next: any) {
    try {
        console.log(req.body);
        let client = req.body as IClients;
        await clientsModel.create({ ...client });
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating client");
    }
}

async function edit(req: Request, res: Response, next: any) {
    const client = await clientsModel.findByPk(req.params.id);
    res.render("edit", { client: client });
}

async function update(req: Request, res: Response, next: any) {
    await clientsModel.update(
        req.body as IClients, {
        where: {
            id: req.params.id
        }
    }
    )

    res.redirect("/");
}

async function del(req: Request, res: Response, next: any) {
    await clientsModel.destroy(
        {
        where: {
            id: req.params.id
        }
    }
    )

    res.redirect("/");
}

export default { index, create, store, show, edit, update, del };