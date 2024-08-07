import { Router } from "express";
import { createClass, deleteClass, getAllClasses, getEnrolledClasses } from "../controllers/class.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import { enrollClass } from "../controllers/enrollClass.controller.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = new Router()

router.post('/create',authMiddleware, adminMiddleware, createClass)
router.get('/:classId/enroll', authMiddleware, enrollClass)
router.get('/',authMiddleware, getAllClasses)
router.get('/enrolled',authMiddleware, getEnrolledClasses)
router.get('/:id/delete', authMiddleware,adminMiddleware, deleteClass)



export default router