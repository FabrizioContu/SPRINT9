import { createContext, useEffect, useState } from "react";
import LogoCircle from "../assets/LogoCircle.png";
import LogoBillet from "../assets/LogoBillet.png";
import LaIgualitariaTextBlanc from "../assets/LaIgualitariaTextBlanc.png";
import LaIgualitariaText from "../assets/LaIgualitariaText.png";
import somLaClau from "../assets/somLaClau.png";
import logos_peu from "../assets/logos_peu.png";
import proveidors from "../proveidors.js";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
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
