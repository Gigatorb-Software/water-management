import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    image: null,
    productName: "",
    description: "",
    category: "",
    price: "",
    stockQuantity: "",
    warrantyPeriod: "",
    is_active: true,
    userId: "",
  });
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/admin/product/${id}`
            // { withCredentials: true }
          );
          setProduct(response?.data?.product);
          setCurrentImage(response?.data?.product.image);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('product', product)

    const formData = new FormData();

    if (product.image instanceof File) {
      formData.append("image", product.image);
    } else if (currentImage) {
      formData.append("imageUrl", currentImage);
    }

    formData.append("productName", product.productName);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("price", product.price);
    formData.append("stockQuantity", product.stockQuantity);
    formData.append("warrantyPeriod", product.warrantyPeriod);
    formData.append("is_active", product.is_active);
    formData.append("userId", product.userId);

    try {
      let response;
      if (id) {
        response = await axios.put(
          `http://localhost:3000/admin/product/${id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:3000/admin/product",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
      }
      alert(id ? "Product updated successfully!" : "Product added successfully!");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error submitting product:", error);
      alert(id ? "Failed to update product" : "Failed to add product");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#0891b2]">
        {id ? "Edit Product" : "Add New Product"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Product Name:</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
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

        {/* Category */}
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

        {/* Price */}
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

        {/* Stock Quantity */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Stock Quantity:</label>
          <input
            type="number"
            name="stockQuantity"
            value={product.stockQuantity}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter stock quantity"
          />
        </div>

        {/* Warranty Period */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Warranty Period:</label>
          <input
            type="text"
            name="warrantyPeriod"
            value={product.warrantyPeriod}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter warranty period"
          />
        </div>

        {/* Is Active */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_active"
            checked={product.is_active}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="font-medium text-gray-700">Is Active</label>
        </div>

        {/* User ID */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">User ID:</label>
          <input
            type="text"
            name="userId"
            value={product.userId}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter user ID"
          />
        </div>

        {/* Image */}
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
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white rounded-md p-2  transition-colors"
        >
          {id ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
