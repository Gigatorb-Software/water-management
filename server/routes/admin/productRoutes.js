const express = require('express');
const router = express.Router();
// const productController = require('../controllers/productController');
const productController = require('../../controllers/productController');

// const { upload } = require('../utils/cloudinary'); // Multer setup for handling image uploads
const {upload} = require('../../helpers/cloudinary')
// const verifyToken = require('../middleware/verifyToken');
const verifyToken = require('../../middleware/verifyToken');

// Get all products (No authentication required for this route)
router.get('/admin/products', productController.getProducts);

// Get a product by ID
router.get('/admin/product/:id', productController.getProductById);

// Create a new product (Protected route)
router.post('/admin/product', verifyToken, upload.single('image'), productController.createProduct);
// router.post('/admin/product',  upload.single('image'), productController.createProduct);


// Update an existing product (Protected route)
router.put('/admin/product/:id', verifyToken,upload.single('image'), productController.updateProduct);

// Delete a product (Protected route)
router.delete('/admin/product/:id',verifyToken,  productController.deleteProduct);

module.exports = router;


// ------------------------------------------------------------------------------------
// const express = require("express");
// const { upload, imageUploadUtil } = require("../../helpers/cloudinary");
// const Product = require("../../models").Product;
// const router = express.Router();
// router.post("/admin/product", upload.single("image"), async (req, res) => {
//   try {
//     const {
//       title,
//       category,
//       description,
//       brand,
//       price,
//       salePrice,
//       totalStock,
//       averageReview,
//     } = req.body;
//     const fileBuffer = req.file.buffer; // Access buffer from Multer

//     // Upload image to Cloudinary
//     const cloudinaryResult = await imageUploadUtil(fileBuffer);

//     // Create the product record in the database (using Sequelize)
//     const newProduct = await Product.create({
//       title,
//       category,
//       image: cloudinaryResult.secure_url,
//       description,
//       brand,
//       price,
//       salePrice,
//       totalStock,
//       averageReview,
//     });

//     res.status(201).json({ message: "Product added successfully", newProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error adding product" });
//   }
// });
// module.exports = router;
