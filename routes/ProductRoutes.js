import express from "express";
import { authAPI } from './middlewares/Middlewares.js';
import {
  getProductsController,
  getProductController,
  postProductController,
  updateProductController,
  deleteProductController
} from '../controllers/ProductControllers.js'

const router = express.Router();
router.use(express.json());

router.get("/", getProductsController);
router.get("/:id", getProductController);
router.post("/", authAPI, postProductController);
router.put("/actualizar/:id", authAPI, updateProductController);
router.delete("/borrar/:id", authAPI, deleteProductController);

export default router;