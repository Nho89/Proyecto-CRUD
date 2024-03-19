import express from "express";
import { getAllPosters, deletePoster, createPoster, updatePoster, getPosterById } from "../controllers/PosterController.js";
import {validateCreatePoster, validateDeletePoster, validatePutPosters} from "../validators/posterValidator.js"
const router = express.Router();
  
router.get("/", getAllPosters);
router.delete("/:id",validateDeletePoster, deletePoster);
router.post("/", validateCreatePoster,createPoster);
router.put("/:id",validatePutPosters, updatePoster);
router.get("/:id", getPosterById);
export default router;