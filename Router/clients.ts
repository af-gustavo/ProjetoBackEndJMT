import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

router.get('/clientes/', clientsController.index);
router.get('/clientes/:id', clientsController.show);

router.get("/clientes/create", clientsController.create);
router.post("/clientes/create", clientsController.store);

router.get("/clientes/edit/:id", clientsController.edit);
router.post("/clientes/edit/:id", clientsController.update);

router.get("/clientes/del/:id", clientsController.del);

router.get("/clientes/trabalheconosco", (req, res) => {
    res.send("Opções de carreira");
});

router.get("/clientes/contato", (req, res) => {
    res.send("Telefone");
});

export default router;