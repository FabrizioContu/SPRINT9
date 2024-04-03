import PropTypes from "prop-types";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
