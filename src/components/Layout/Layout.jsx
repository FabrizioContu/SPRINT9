import React from "react";

import Footer from "../Footer";
import Header from "../Header1";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
