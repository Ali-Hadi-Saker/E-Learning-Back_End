import { Router } from "express";
import { uploadFile } from "../controllers/fileUpload.controller.js";

const router = new Router()

router.post('/upload', uploadFile)

export default router