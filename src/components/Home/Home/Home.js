import React from "react";
import Footer from "../../Shared/Footer/Footer";
import ClientsFeedback from "../ClientsFeedback/ClientsFeedback";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Works from "../Works/Works";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Works />
      <ClientsFeedback />
      <Footer />
    </>
  );
};

export default Home;
