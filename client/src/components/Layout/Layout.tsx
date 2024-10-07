import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Card/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
