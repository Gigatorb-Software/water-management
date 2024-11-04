import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ServiceForm from "./pages/Service/ServiceForm";
import AddProduct from "./pages/adminView/AddProduct";
// import AdminLayout from "./pages/adminView/Layout";
import AdminLayout from "./pages/adminView/AdminLayout";

// import AdminDashboard from "./pages/adminView/dashboard";
import AdminDashboard from "./pages/adminView/AdminDashboard";

import ProductDetail from "./components/Layout/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/serviceform" element={<ServiceForm />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="editproduct/:id" element={<AddProduct />} />
          {/* <Route path="orders" element={<AdminOrders />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
