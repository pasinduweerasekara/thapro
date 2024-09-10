import React, { createContext } from "react";

import cardImg1 from "../assets/1.jpg";
import cardImg2 from "../assets/2.jpg";
import cardImg3 from "../assets/3.jpg";
import cardImg4 from "../assets/4.jpg";
import cardImg5 from "../assets/5.jpg";

const productsSet = [
  {
    id: "product1",
    for: "men",
    category: "accessories",
    feature: "feature1",
    title: "Crock Print Brown Card Holder (Veg Tan)",
    description:
      "This card holder is made from high-quality vegetable-tanned leather with a crock print design.",
    price: 4500,
    cardImg: cardImg1,
  },
  {
    id: "product2",
    for: "women",
    category: "wallets",
    feature: "feature3",
    title: "Black Leather Bifold Wallet (Veg Tan)",
    description:
      "A sleek and stylish bifold wallet made from vegetable-tanned black leather.",
    price: 6250,
    cardImg: cardImg2,
  },
  {
    id: "product4",
    for: "men",
    feature: "feature3",
    category: "wallets",
    title: "Croc Print Card Holder (Veg Tan)",
    description:
      "A compact and elegant card holder with a crocodile print, perfect for any occasion.",
    price: 3200,
    cardImg: cardImg1,
  },
  {
    id: "product5",
    feature: "feature1",
    category: "belts",
    for: "unisex",
    title: "Green Wallet (Veg Tan)",
    description:
      "A durable and stylish green wallet made from vegetable-tanned leather.",
    price: 4500,
    cardImg: cardImg5,
  },
  {
    id: "product7",
    feature: "feature3",
    category: "wallets",
    for: "unisex",
    title: "Black Leather Bifold Wallet (Veg Tan)",
    description:
      "A versatile bifold wallet that combines functionality with classic style.",
    price: 6250,
    cardImg: cardImg4,
  },
  {
    id: "product8",
    feature: "feature2",
    for: "women",
    category: "wallets",
    title: "Croc Print Card Holder (Veg Tan)",
    description:
      "An elegant card holder featuring a croc print design, perfect for the modern woman.",
    price: 4500,
    cardImg: cardImg2,
  },
  {
    id: "product9",
    feature: "feature3",
    category: "wallets",
    for: "women",
    title: "Green Wallet (Veg Tan)",
    description:
      "A sophisticated wallet with a rich green color, made from vegetable-tanned leather.",
    price: 3200,
    cardImg: cardImg5,
  },
  {
    id: "product10",
    feature: "feature1",
    category: "wallets",
    for: "men",
    title: "Black Leather Bifold Wallet (Veg Tan)",
    description:
      "A classic bifold wallet crafted from vegetable-tanned black leather, perfect for men.",
    price: 4500,
    cardImg: cardImg3,
  },
];

export const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={productsSet}>
      {children}
    </ProductContext.Provider>
  );
};
