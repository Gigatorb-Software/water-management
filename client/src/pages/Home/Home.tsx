import React from "react";
import Layout from "../../components/Layout/Layout";
import QualityServices from "./QualityServices";
import CuttingEdge from "./CuttingEdge";
import Services from "./Services";
import CarouselComponent from "../../components/Layout/Carousel";
import BlogCard from "../../components/Layout/BlogCard";
import ContactUsForm from "./Contact";
import Products from "../../components/Layout/Card";


const Home = () => {
  return (
    <>
      {/* <QualityServices /> */}
      {/* <CuttingEdge /> */}
      {/* <Services /> */}
      <CarouselComponent/>
      
      
      <Products/>
      
       <BlogCard/>
      <QualityServices/>
      <Services />
      <ContactUsForm/>
    </>
  );
};

export default Home;
