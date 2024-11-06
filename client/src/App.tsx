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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up-user" element={<Signup/>}/>
        <Route path="/serviceform" element={<ServiceForm/>}/>

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
         
       

       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
