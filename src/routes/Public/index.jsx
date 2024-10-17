import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      <Navbar />
      {element}
      <Footer />
    </main>
  );
};

export default Public;
