import { Router } from "express";
import { createClass } from "../controllers/class.controller.js";

const router = new Router()

router.post('/createClass', createClass)

export default router