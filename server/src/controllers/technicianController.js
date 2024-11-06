// controllers/technicianController.js
import { Technician } from "../models";
import { validationResult } from "express-validator";

export const registerTechnician = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    firstName,
    lastName,
    phone,
    email,
    address,
    employmentDate,
    availabilityStatus,
  } = req.body;
  try {
    const existingUser = await Technician.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new technician
    const newTechnician = await Technician.create({
      firstName,
      lastName,
      phone,
      email,
      address,
      employmentDate,
      availabilityStatus,
    });

    return res.status(201).json({
      message: "Technician registered successfully",
      technician: newTechnician,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error registering technician",
      error: error.message,
    });
  }
};
