import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ServiceForm from "./pages/Service/ServiceForm";
import QualityServices from "./pages/Home/QualityServices";
import Products from "./components/Layout/Card";
import BlogCard from "./components/Layout/BlogCard";
import Services from "./pages/Home/Services";
import ContactUsForm from "./pages/Home/Contact";
import ProtectedRouteToken from "./routes/ProtectedRouteToken";
import Layout from "./components/Layout/Layout";
import AdminLayout from "./pages/adminView/AdminLayout";
import AdminDashboard from "./pages/adminView/AdminDashboard";
import AddProduct from "./pages/adminView/AddProduct";
import AdminServices from "./pages/adminView/AdminServices";
import AddTechnician from "./pages/adminView/AddTechnician";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up-user" element={<Signup/>}/>
        <Route path={`/serviceform/:data`} element={<ServiceForm/>}/>

        <Route 
         element={
          <ProtectedRouteToken>
            <Layout />
          </ProtectedRouteToken>
        }
        >
        <Route path="/aboutUs" element={
          <ProtectedRouteToken><QualityServices/></ProtectedRouteToken>
          }/>
        <Route path="/products" element={
          <ProtectedRouteToken><Products/></ProtectedRouteToken>
          
          }/>
        <Route path="/blogs" element={
          <ProtectedRouteToken><BlogCard/></ProtectedRouteToken>
          
          }/>
        <Route path="/services" element={
          <ProtectedRouteToken><Services/></ProtectedRouteToken>
          }/>
        <Route path="/contact" element={
          <ProtectedRouteToken><ContactUsForm/></ProtectedRouteToken>
          }/>
        </Route>
         
         {/* admin route  */}
         <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="editproduct/:id" element={<AddProduct />} /> 
          <Route path="services" element={<AdminServices />} /> 
          <Route path="addTech" element={<AddTechnician />} /> 
        </Route>
       

       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
