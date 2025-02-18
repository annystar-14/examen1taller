import { Router } from "express";
import { getAll } from "../controllers/usuarios.controller";
import { getAll1 } from "../controllers/usuarios.controller";


const router = Router();

router.get("/usuario1", getAll);

router.get("/usuario2", getAll1);

export default router;