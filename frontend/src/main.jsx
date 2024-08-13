import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductsProvider from "./context/ProductsProvider.jsx";
import CartContextProvider from "./context/CartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsProvider>
  </React.StrictMode>
);
