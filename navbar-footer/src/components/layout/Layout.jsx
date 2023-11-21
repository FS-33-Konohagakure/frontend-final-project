import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
