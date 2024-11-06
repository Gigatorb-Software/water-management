import express from "express";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import cors from "cors";

import publicRoutes from "./src/routes/public";
import apiRoutes from "./src/routes/api";
import adminRoutes from "./src/routes/admin";
import apiMiddleware from "./src/middleware/apiAuth";
import adminMiddleware from "./src/middleware/adminAuth";
import errorHandler from "./src/middleware/errorHandler";
import userRoutes from "./src/routes/user";

dotenv.config();
require("./src/config/sequelize");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const allowedOrigins = ["http://localhost:5173"] || "*";
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "RefreshToken"],
  exposedHeaders: ["Content-Length", "Content-Type", "RefreshToken", "Token"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(bodyParser.json());
app.use("/api", userRoutes);
app.use("/pub", publicRoutes);
// app.use('/api', apiMiddleware, apiRoutes);
// app.use('/api/admin', apiMiddleware, adminMiddleware, adminRoutes);
app.use(errorHandler);

module.exports = app;
