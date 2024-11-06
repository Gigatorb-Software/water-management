import express from "express";
import validate from "express-validation";

import * as technicianController from "../controllers/technicianController";

const router = express.Router();

// = ===============================
// API routes
// = ===============================

router.post("/technicianRegister", technicianController.registerTechnician);


module.exports = router;