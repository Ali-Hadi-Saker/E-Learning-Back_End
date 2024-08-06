import { Router } from "express";
import { uploadFile } from "../controllers/fileUpload.controller.js";
import { downloadFile } from "../controllers/fileDownload.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = new Router()

router.post('/upload',authMiddleware, uploadFile)
router.get('/:classId/download/:filename',authMiddleware, downloadFile)

export default router