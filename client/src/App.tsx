import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ServiceForm from "./pages/Service/ServiceForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up-user" element={<Signup/>}/>
        <Route path="/serviceform" element={<ServiceForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
