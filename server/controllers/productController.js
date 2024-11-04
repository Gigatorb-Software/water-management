// const { Product } = require('../models'); // Import the Sequelize Product model
const Product = require("../models").Product;
// const { imageUploadUtil } = require('../utils/cloudinary'); // For Cloudinary image upload
const { upload, imageUploadUtil } = require("../helpers/cloudinary");

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

exports.getProductsById = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id); // Using Sequelize to find product by primary key

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Product fetched successfully",
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
      success: false,
    });
  }
};
// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    } = req.body;

    // If an image is uploaded
    let imageUrl = null;
    if (req.file) {
      const cloudinaryResult = await imageUploadUtil(req.file.buffer);
      imageUrl = cloudinaryResult.secure_url;
    }

    const newProduct = await Product.create({
      title,
      category,
      image: imageUrl,
      description,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    });

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title,
      category,
      description,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview, } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If a new image is provided
    if (req.file) {
      const cloudinaryResult = await imageUploadUtil(req.file.buffer);
      product.image = cloudinaryResult.secure_url;
    }

    // Update other fields
    product.title = title || product.title;
    product.category = category || product.category;
    product.description = description || product.description;
    product.brand = brand || product.brand;
    product.price = price || product.price;
    product.salePrice = salePrice || product.salePrice;
    product.totalStock = totalStock || product.totalStock;
    product.averageReview = averageReview || product.averageReview;


    await product.save();
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update product" });
  }
};
// exports.updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { 
//       title,
//       category,
//       description,
//       brand,
//       price,
//       salePrice,
//       totalStock,
//       averageReview 
//     } = req.body;

//     const product = await Product.findByPk(id);
//     console.log('product', product)
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     // If a new image is provided, upload it to Cloudinary
//     if (req.file) {
//       try {
//         const cloudinaryResult = await imageUploadUtil(req.file.buffer);
//         console.log("Uploaded image URL:", cloudinaryResult.secure_url);
        
//         // Optionally, remove the old image from Cloudinary (if applicable)
//         if (product.image) {
//           const oldImagePublicId = getPublicIdFromUrl(product.image);
//           await cloudinary.uploader.destroy(oldImagePublicId);
//         }

//         // Update the product image URL with the new one
//         product.image = cloudinaryResult.secure_url;
//       } catch (error) {
//         console.error("Failed to upload image:", error);
//         return res.status(500).json({ message: "Failed to upload image" });
//       }
//     }

//     // Update other product fields
//     product.title = title || product.title;
//     product.category = category || product.category;
//     product.description = description || product.description;
//     product.brand = brand || product.brand;
//     product.price = price || product.price;
//     product.salePrice = salePrice || product.salePrice;
//     product.totalStock = totalStock || product.totalStock;
//     product.averageReview = averageReview || product.averageReview;

//     // Save the updated product details
//     await product.save();
//     res.status(200).json({ message: "Product updated successfully", product });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to update product" });
//   }
// };

// // Helper function to extract the public ID from Cloudinary URL
// function getPublicIdFromUrl(url) {
//   const parts = url.split('/');
//   const publicIdWithExtension = parts[parts.length - 1];
//   const publicId = publicIdWithExtension.split('.')[0]; // Remove the file extension
//   return publicId;
// }


// Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};
