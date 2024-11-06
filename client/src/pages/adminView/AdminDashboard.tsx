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

// Example product data type
type Product = {
  id: string;
  title: string;
  brand: string;
  category: string;
  salePrice: string;
  image: string;
  totalStock: number;
  price: number;
};

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/products",
        {
          withCredentials: true, // Send the cookie along with the request
        }
      );
      console.log("response", response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/admin/product/${id}`, {
        withCredentials: true,
      });
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
        accessorKey: "id", // Unique identifier
        header: "ID",
        size: 20,
      },
      {
        accessorKey: "title", // Unique identifier
        header: "Title",
        size: 200,
      },
      {
        accessorKey: "category", // Unique identifier
        header: "Category",
        size: 200,
      },
      {
        accessorKey: "brand",
        header: "brand",
        size: 200,
        Cell: ({ cell }) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={cell.row.original.image}
              alt={cell.row.original.brand}
              width="50"
              height="50"
              style={{ marginRight: 10 }}
            />
            {cell.row.original.brand}
          </div>
        ),
      },
      {
        accessorKey: "totalStock",
        header: "Stock",
        size: 100,
        Cell: ({ cell }) => (cell.row.original.totalStock ? "true" : "false"),
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
      },
      {
        accessorKey: "actions",
        header: "Action",
        size: 150,
        Cell: ({ cell }) => (
          <div className="flex">
            {/* <Button variant="contained" color="success" startIcon={<Edit />}>
              Edit
            </Button> */}
            {/* <IconButton color="success" style={{ marginLeft: 1 }}>
              <Edit />
            </IconButton> */}
            <IconButton
              color="success"
              style={{ marginLeft: 1 }}
              onClick={() => handleEdit(cell.row.original.id)}
            >
              <Edit />
            </IconButton>
            <IconButton
              color="error"
              style={{ marginLeft: 1 }}
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
