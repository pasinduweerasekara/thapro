import React, { createContext } from "react";

import cardImg1 from "../assets/1.jpg";
import cardImg2 from "../assets/2.jpg";
import cardImg3 from "../assets/3.jpg";
import cardImg4 from "../assets/4.jpg";
import cardImg5 from "../assets/5.png";

const productsSet = [
  {
    id: "product1",
    feature: "feature1",
    title: "crock print brown card holder (veg tan)",
    description:
      " ll be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 4500,
    cardImg: cardImg1,
  },
  {
    id: "product2",
    feature: "feature3",
    title: "Black leather bifold wallet (veg tan)",
    description:
      " long estarem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 6250,
    cardImg: cardImg2,
  },
  {
    id: "product3",
    feature: "feature2",
    title: "Brown leather bifold wallet (veg tan)",
    description:
      " long estabished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 4500,
    cardImg: cardImg3,
  },
  {
    id: "product4",
    feature: "feature3",
    title: "croc print card holder (veg tan)",
    description:
      " long established fact that a reution of letters, as opposed to using",
    price: 3200,
    cardImg: cardImg1,
  },
  {
    id: "product5",
    feature: "feature1",
    title: "Green Wallet (veg tan)",
    description:
      " long established fact that a reader will bs, as opposed to using",
    price: 4500,
    cardImg: cardImg5,
  },
  {
    id: "product6",
    feature: "feature1",
    title: "croc print card holder (veg tan)",
    description:
      " long established fact that a reader will bed by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 4500,
    cardImg: cardImg2,
  },
  {
    id: "product7",
    feature: "feature3",
    title: "Black leather bifold wallet (veg tan)",
    description:
      " long establ will be distracted by the readable con of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 6250,
    cardImg: cardImg4,
  },
  {
    id: "product8",
    feature: "feature2",
    title: "croc print card holder (veg tan)",
    description:
      " long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 4500,
    cardImg: cardImg2,
  },
  {
    id: "product9",
    feature: "feature3",
    title: "green-wallet-veg-tan",
    description:
      " long established fact that a reade the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    price: 3200,
    cardImg: cardImg5,
  },
  {
    id: "product10",
    feature: "feature1",
    title: "Black leather bifold wallet (veg tan)",
    description:' long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        price: 4500,
    cardImg: cardImg3,
  },
];

export const productContext = createContext();

const ProductsProvider = ({ children }) => {
  return (
    <productContext.Provider value={productsSet}>
      {children}
    </productContext.Provider>
  );
};

export default ProductsProvider;
