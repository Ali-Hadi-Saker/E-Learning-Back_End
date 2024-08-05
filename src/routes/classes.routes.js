import { Router } from "express";
import { createClass } from "../controllers/class.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import { enrollClass } from "../controllers/enrollClass.controller.js";

const router = new Router()

router.post('/create', createClass)
router.post('/:classId/enroll', authMiddleware, enrollClass)

export default router