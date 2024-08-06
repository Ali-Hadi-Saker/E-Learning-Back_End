import { Router } from "express";
import { uploadFile } from "../controllers/fileUpload.controller.js";
import { downloadFile } from "../controllers/fileDownload.controller.js";

const router = new Router()

router.post('/upload', uploadFile)
router.get('/:classId/download/:filename', downloadFile)

export default router