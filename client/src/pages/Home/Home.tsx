import React from "react";
import Layout from "../../components/Layout/Layout";
import QualityServices from "./QualityServices";
import CuttingEdge from "./CuttingEdge";
import Services from "./Services";

const Home = () => {
  return (
    <Layout>
      <QualityServices />
      <CuttingEdge />
      <Services />
    </Layout>
  );
};

export default Home;
