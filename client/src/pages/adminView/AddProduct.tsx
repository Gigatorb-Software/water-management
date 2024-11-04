import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
    averageReview: "",
  });
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
    if (id) {
      // Fetch product data and populate form
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/admin/product/${id}`,
            {
              withCredentials: true,
            }
          );
          // console.log("responsesas", response.data);
          setProduct(response?.data?.product);
          setCurrentImage(response?.data?.product.image); // Set current image
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append the image field (either the new file or current image URL)
    if (product.image instanceof File) {
      formData.append("image", product.image);
    } else if (currentImage) {
      formData.append("imageUrl", currentImage); // Send the existing image URL if no new image is selected
    }

    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("salePrice", product.salePrice);
    formData.append("totalStock", product.totalStock);
    formData.append("averageReview", product.averageReview);

    try {
      let response;
      if (id) {
        // Update existing product
        response = await axios.put(
          `http://localhost:8000/api/admin/product/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
      } else {
        // Add new product
        response = await axios.post(
          "http://localhost:8000/api/admin/product",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
      }
      console.log(response.data);
      alert(
        id ? "Product updated successfully!" : "Product added successfully!"
      );
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error submitting product:", error);
      alert(id ? "Failed to update product" : "Failed to add product");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {id ? "Edit Product" : "Add New Product"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Title */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product title"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product description"
            rows="4"
          ></textarea>
        </div>

        {/* Product Category */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product category"
          />
        </div>

        {/* Product Brand */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Brand:</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product brand"
          />
        </div>

        {/* Product Price */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product price"
          />
        </div>

        {/* Sale Price */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Sale Price:</label>
          <input
            type="number"
            name="salePrice"
            value={product.salePrice}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter sale price (optional)"
          />
        </div>

        {/* Total Stock */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Total Stock:</label>
          <input
            type="number"
            name="totalStock"
            value={product.totalStock}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter total stock"
          />
        </div>

        {/* Average Review */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">
            Average Review:
          </label>
          <input
            type="number"
            name="averageReview"
            value={product.averageReview}
            onChange={handleChange}
            step="0.1"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter average review (optional)"
          />
        </div>

        {/* Product Image */}
        {/* <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Image:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div> */}
        {/* Product Image */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Image:</label>
          {currentImage && (
            <img
              src={currentImage}
              alt="Current Product"
              className="mb-2"
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          {id ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
