import React from "react";
import Header from "../../components/Header";

const Public = ({ element }) => {
  return (
    <main>
      <Header />
      {element}
    </main>
  );
};

export default Public;
