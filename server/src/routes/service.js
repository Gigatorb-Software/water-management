import express from "express";
import validate from "express-validation";

import * as serviceController from "../controllers/serviceController";

const router = express.Router();

// = ===============================
// API routes
// = ===============================

router.post("/createService", serviceController.createService);
router.get("/getAllService", serviceController.getAllServices);

module.exports = router;
