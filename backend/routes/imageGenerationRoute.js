import express from "express";
import {imageGenerator} from "../controller/imageGeneratorController.js"
const router= express.Router();

router.post('/imageGenerator',imageGenerator )

export default router;