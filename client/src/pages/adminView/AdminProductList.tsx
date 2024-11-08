import { useEffect, useState } from "react";
import {
  IconButton,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { apiDeleteProductById, apiGetAllProducts } from "../../services/AdminAPIs/AdminCrud";
import toast from "react-hot-toast";

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

const AdminProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await apiGetAllProducts();
      const mappedProducts = response?.data?.products?.map((product : any) => ({
        id: product.id,
        productName: product.productName,
        description: product.description,
        category: product.category,
        price: product.price,
        stockQuantity: product.stockQuantity,
        warrantyPeriod: product.warrantyPeriod,
        is_active: product.is_active,
        image: product.images[0]?.image_url || "",
      }));
      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error(error.response.data.message);

    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await apiDeleteProductById(id);
      fetchProducts();
      // alert("Product deleted successfully!");
      toast.success(response.data.message);

    } catch (error) {
      console.error("Error deleting product:", error);
      // alert("Failed to delete product");
      toast.error(error.response.data.message);

    }
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/editproduct/${id}`);
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: "20px" }}>
     
      <TableContainer component={Paper}>

      <Typography
        variant="h2"
        sx={{
          color: '#00acc1',
          fontFamily: 'serif',
          fontWeight: 'medium',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: { xs: '1.875rem', md: '2.25rem' },
          marginTop: '20px',
        }}
      >
        Product Lists
      </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>Description</TableCell>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>Stock Status</TableCell>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif' }}>Image</TableCell>
              <TableCell sx={{ fontWeight: "600", fontFamily: 'serif'}}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{ fontFamily: 'serif' }}>{product.id}</TableCell>
                <TableCell  sx={{ fontFamily: 'serif' }}>{product.productName}</TableCell>
                <TableCell  sx={{ fontFamily: 'serif' }}>{product.category}</TableCell>
                <TableCell  sx={{ fontFamily: 'serif' }}>{product.description}</TableCell>
                <TableCell  sx={{ fontFamily: 'serif' }}>{product.price}</TableCell>
                <TableCell  sx={{ fontFamily: 'serif' }}>
                  {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
                </TableCell>
                <TableCell>
                  <img src={product.image} alt={product.productName} width="50" height="50" />
                </TableCell>
                <TableCell>
                  <IconButton color="success" onClick={() => handleEdit(product.id)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(product.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminProductList;