import express from "express";
import validate from "express-validation";

import * as serviceController from "../controllers/serviceController";

const router = express.Router();

// = ===============================
// API routes
// = ===============================

router.post("/createService", serviceController.createService);

module.exports = router;
