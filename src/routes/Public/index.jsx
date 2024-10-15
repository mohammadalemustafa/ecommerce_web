import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      <Navbar />
      {element}
    </main>
  );
};

export default Public;
