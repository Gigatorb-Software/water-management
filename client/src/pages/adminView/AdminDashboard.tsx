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
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await apiDeleteProductById(id);
      fetchProducts();
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
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

export default AdminDashboard;


// import React from 'react';

// const AdminDashboard = () => {
//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-3 sm:px-8">
//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-green-400">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Users</h3>
//           <p className="text-3xl">12,768</p>
//         </div>
//       </div>

//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-blue-400">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
//           </svg>
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Products</h3>
//           <p className="text-3xl">39,265</p>
//         </div>
//       </div>

//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-indigo-400">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//           </svg>
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Technicians</h3>
//           <p className="text-3xl">142,334</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React from 'react';
// import { FaBoxOpen } from 'react-icons/fa'; // Import FaBoxOpen for Total Products
// import { FaHardHat } from 'react-icons/fa'; // Import FaHelmetSafety for Total Technicians


// const AdminDashboard = () => {
//   return (
//     <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-3 sm:px-8">
//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-green-400">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Users</h3>
//           <p className="text-3xl">12,768</p>
//         </div>
//       </div>

//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-blue-400">
//           {/* FaBoxOpen icon for Total Products */}
//           <FaBoxOpen className="h-12 w-12 text-white" />
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Products</h3>
//           <p className="text-3xl">39,265</p>
//         </div>
//       </div>

//       <div className="flex items-center bg-white border rounded-md overflow-hidden shadow">
//         <div className="p-4 bg-indigo-400">
//           {/* FaHelmetSafety icon for Total Technicians */}
//           <FaHardHat className="h-12 w-12 text-white" />
//         </div>
//         <div className="px-4 text-gray-700">
//           <h3 className="text-sm tracking-wider">Total Technicians</h3>
//           <p className="text-3xl">142,334</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
