import { Router } from "express";
import usersController from "../Controller/usersController";

const router = Router();

router.get('/', usersController.login);
router.post('/', usersController.checkLogin);

export default router;