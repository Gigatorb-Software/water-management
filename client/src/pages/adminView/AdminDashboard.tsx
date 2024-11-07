import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ColumnDef,
} from "material-react-table";
import { Button, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiDeleteProductById, apiGetAllProducts } from "../../services/AdminAPIs/AdminCrud";

// Example product data type
type Product = {
  id: number;
  productName: string;
  description: string;
  category: string;
  price: string;
  stockQuantity: number;
  warrantyPeriod: number;
  is_active: boolean;
  image: string;
};

const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      // const response = await axios.get("http://localhost:3000/admin/products");
      const response = await apiGetAllProducts();

       // Map the data to match the expected structure in Product type
       const mappedProducts = response?.data?.products?.map((product) => ({
        id: product.id,
        productName: product.productName,
        description: product.description,
        category: product.category,
        price: product.price,
        stockQuantity: product.stockQuantity,
        warrantyPeriod: product.warrantyPeriod,
        is_active: product.is_active,
        image: product.images[0]?.image_url || "", // Extract first image URL
      }));
      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleDelete = async (id) => {
    try {
      // await axios.delete(`http://localhost:3000/admin/product/${id}`);
     await apiDeleteProductById(id)
      // setProducts(products.filter((product) => product.id !== id));
      fetchProducts();
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
    }
  };
  const handleEdit = (id) => {
    navigate(`/admin/editproduct/${id}`);
  };
  // Columns for the table
  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 20,
      },
      {
        accessorKey: "productName",
        header: "Product Name",
        size: 150,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
      },
      {
        accessorKey: "stockQuantity",
        header: "Stock Quantity",
        size: 100,
        Cell: ({ cell }) => (cell.row.original.stockQuantity > 0 ? "In Stock" : "Out of Stock"),
      },
      {
        accessorKey: "image",
        header: "Image",
        size: 150,
        Cell: ({ cell }) => (
          <img
            src={cell.row.original.image}
            alt={cell.row.original.productName}
            width="50"
            height="50"
          />
        ),
      },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ cell }) => (
          <div className="flex">
            <IconButton
              color="success"
              onClick={() => handleEdit(cell.row.original.id)}
            >
              <Edit />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(cell.row.original.id)}
            >
              <Delete />
            </IconButton>
          </div>
        ),
      },
    ],
    []
  );


  const table = useMaterialReactTable({
    columns,
    data: products, // Use the product data
  });

  return <MaterialReactTable table={table} />;
};

export default AdminDashboard;
