// controllers/serviceController.js
import { Service, User, Address } from "../models";

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

export const getAllServices = async (req, res) => {
  try {
    // Fetch all service bookings, including related data if needed (e.g., User, Product, Technician)
    const services = await Service.findAll({
      include: [
        {
          model: User,
          attributes: ["firstName", "lastName", "email"],
          include: [
            {
              model: Address,
              as: "address",
              attributes: ["street", "city", "state", "postalCode", "country"],
            },
          ],
        },
      ],
      order: [["createdAt", "DESC"]], // Sort by creation date (latest first)
    });

    // Respond with success and the list of services
    return res.status(200).json({
      message: "List of all service bookings",
      data: services,
    });
  } catch (error) {
    console.error("Error fetching service bookings:", error);
    return res.status(500).json({
      message: "Error fetching service bookings",
      error: error.message,
    });
  }
};

