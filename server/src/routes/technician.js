import express from "express";
import validate from "express-validation";

import * as technicianController from "../controllers/technicianController";
import { authenticateToken } from "../middleware/apiAuth"; 

const router = express.Router();

// = ===============================
// API routes
// = ===============================

router.post("/technicianRegister", authenticateToken,technicianController.registerTechnician);
router.get("/getAllRegister",authenticateToken, technicianController.getAllTechnicians);


module.exports = router;
