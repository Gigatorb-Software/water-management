// controllers/serviceController.js
import { Service } from "../models";

export const createService = async (req, res) => {
  try {
    const { customerId, productId, serviceType, receipt, serviceStatus } =
      req.body;

    // Validate required fields
    if (!customerId || !productId || !serviceType || !receipt) {
      return res.status(400).json({
        message:
          "Missing required fields: userId, productId, serviceType, or scheduledDate",
      });
    }

    // Create new service booking
    const newServiceBooking = await Service.create({
      customerId,
      productId,
      serviceType,
      receipt,
      serviceStatus,
    });

    // Respond with success
    return res.status(201).json({
      message: "Service booking created successfully",
      data: newServiceBooking,
    });
  } catch (error) {
    console.error("Error creating service booking:", error);
    return res.status(500).json({
      message: "Error creating service booking",
      error: error.message,
    });
  }
};
