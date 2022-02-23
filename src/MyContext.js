import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [totalPrice, setTotalPrice] = useState("");
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const calculateTotalPrice = (allProducts) => {
    let totalPrice = 0;
    allProducts.cart.item.forEach((product) => {
      totalPrice += product.bestPrice;
    });
    const totalPriceFormated = (totalPrice / 100).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return totalPriceFormated;
  };

  useEffect(() => {
    fetch("https://products-teste.herokuapp.com/")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setTotalPrice(calculateTotalPrice(result));
        setIsLoading(false);
      });
  }, []);

  const context = {
    products,
    isLoading,
    totalPrice,
    isOpenCart,
    isOpenNav,
    setIsOpenCart,
    setIsOpenNav,
  };

  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
};

MyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyContextProvider as Provider };
