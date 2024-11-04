import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8000/api/admin/product/${id}`,
            {
              withCredentials: true,
            }
          );
          console.log("responsesasid getdetai", response.data);
          setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-semibold mb-6">{product.title}</h1>
      <img src={product.image} alt={product.title} className="mb-4" />
      <p className="text-lg">{product.description}</p>
      <p className="text-2xl font-bold text-cyan-600">₹{product.salePrice}</p>
      <p className="text-lg line-through">₹{product.price}</p>
      <p className="text-md">Brand: {product.brand}</p>
      <p className="text-md">Rating: {product.averageReview}</p>
    </div>
  );
};

export default ProductDetail;
