import React from "react";
import Layout from "../../components/Layout/Layout";
import QualityServices from "./QualityServices";
import CuttingEdge from "./CuttingEdge";
import Services from "./Services";
import CarouselComponent from "../../components/Layout/Carousel";
import Card from "../../components/Layout/Card";
import BlogCard from "../../components/Layout/BlogCard";
import ContactUsForm from "./Contact";


const Home = () => {
  return (
    <Layout>
      {/* <QualityServices /> */}
      {/* <CuttingEdge /> */}
      {/* <Services /> */}
      <CarouselComponent/>
      
      
      <Card/>
      
      <BlogCard/>
      <QualityServices/>
      <Services />
      <ContactUsForm/>
    </Layout>
  );
};

export default Home;
