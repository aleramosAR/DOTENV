import express from "express";
import { authAPI } from './middlewares/Middlewares.js';
import {
  getMensajeController,
  postMensajeController
} from '../controllers/MensajesControllers.js'

const router = express.Router();
router.use(express.json());

router.get("/", getMensajeController);
router.post("/", authAPI, postMensajeController);

export default router;