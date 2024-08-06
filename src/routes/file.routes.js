import { Router } from "express";
import { uploadFile } from "../controllers/fileUpload.controller.js";
import { downloadFile } from "../controllers/fileDownload.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = new Router()

router.post('/upload',authMiddleware,adminMiddleware, uploadFile)
router.get('/:classId/download/:filename',authMiddleware, downloadFile)

export default router