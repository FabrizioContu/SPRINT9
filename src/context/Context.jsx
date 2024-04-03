import { createContext, useEffect, useState } from "react";
import LogoCircle from "../assets/LogoCircle.png";
import LogoBillet from "../assets/LogoBillet.png";
import LaIgualitariaTextBlanc from "../assets/LaIgualitariaTextBlanc.png";
import LaIgualitariaText from "../assets/LaIgualitariaText.png";
import somLaClau from "../assets/somLaClau.png";
import logos_peu from "../assets/logos_peu.png";
import proveidors from "../proveidors.js";
import PropTypes from "prop-types";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const getCategoryColor = (categoria) => {
    switch (categoria.toLowerCase()) {
      case "lactics":
        return "bg-sky-400 hover:bg-sky-500";
      case "verdures":
        return "bg-green-400 hover:bg-green-500";
      case "fruites":
        return "bg-red-400 hover:bg-red-500";
      case "llegums":
        return "bg-yellow-400 hover:bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };
  const renderProducts = (proveidor) => {
    switch (proveidor.categoria.toLowerCase()) {
      case "lactics":
        return (
          <div>
            <h3 className="font-bold text-lg pb-3">Làctics!</h3>
            <ul className="flex justify-center">
              {proveidor.productos.map((prod) => (
                <li
                  key={prod}
                  className="bg-sky-400 hover:bg-sky-600 rounded-xl my-1 py-2 px-3 mx-2"
                >
                  {prod}
                </li>
              ))}
            </ul>
          </div>
        );

      case "verdures":
        return (
          <div>
            <h3 className="font-bold text-lg pb-3">Verdures!</h3>
            <ul className="flex justify-center">
              {proveidor.productos.map((prod) => (
                <li
                  key={prod}
                  className="bg-green-400 hover:bg-green-600 rounded-xl my-1 py-2 px-3 mx-2"
                >
                  {prod}
                </li>
              ))}
            </ul>
          </div>
        );
      case "fruites":
        return (
          <div>
            <h3 className="font-bold text-lg pb-3">Fruites!</h3>
            <ul className="flex justify-center">
              {proveidor.productos.map((prod) => (
                <li
                  key={prod}
                  className="bg-red-400 hover:bg-red-600 rounded-xl my-1 py-2 px-3 mx-2"
                >
                  {prod}
                </li>
              ))}
            </ul>
          </div>
        );
      case "llegums":
        return (
          <div>
            <h3 className="font-bold text-lg pb-3">Llegums!</h3>
            <ul className="flex justify-center">
              {proveidor.productos.map((prod) => (
                <li
                  key={prod}
                  className="bg-yellow-400 hover:bg-yellow-600 rounded-xl my-1 py-2 px-3 mx-2"
                >
                  {prod}
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null; // si no hay categoría seleccionada no mostra nada
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProveidors = selectedCategory
    ? proveidors.filter(
        (proveidor) => proveidor.categoria.toLowerCase() === selectedCategory
      )
    : proveidors;

  const categories = Array.from(
    new Set(proveidors.map((proveidor) => proveidor.categoria.toLowerCase()))
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const [showArrowUp, setShowArrowUp] = useState(false);

  // Function to handle scrolling and show/hide arrowUp button
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const showArrowThreshold = 400; // Adjust this threshold as needed

    // Check if scrollTop is greater than the threshold to show the arrowUp button
    setShowArrowUp(scrollTop > showArrowThreshold);
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle scrolling back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Context.Provider
      value={{
        LogoCircle,
        LogoBillet,
        LaIgualitariaTextBlanc,
        LaIgualitariaText,
        somLaClau,
        logos_peu,
        proveidors,
        renderProducts,
        getCategoryColor,
        filteredProveidors,
        selectedCategory,
        setSelectedCategory,
        categories,
        handleCategoryClick,
        handleScroll,
        scrollToTop,
        showArrowUp,
        setShowArrowUp,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
