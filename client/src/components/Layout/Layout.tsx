import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import CarouselComponent from "./Carousel";
import BlogCard from "./BlogCard";
import QualityServices from "../../pages/Home/QualityServices";
import ContactUsForm from "../../pages/Home/Contact";
import Services from "../../pages/Home/Services";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      
      {/* <CarouselComponent/>
      
      
      <Card/>
      
      <BlogCard/>
      <QualityServices/>
      <Services />
      <ContactUsForm/> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
