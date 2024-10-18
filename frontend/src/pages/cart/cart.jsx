import { useContext } from "react";
import CartItem from "../../components/cartitem/CartItem";
import "./cart.css";
import { cartContext } from "../../context/CartContextProvider";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
const Cart = () => {
  const { cart } = useContext(cartContext);
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/products/all");
  };

  const handleGotoCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div id="cart-container">
      <ScrollRestoration />
      {cart.length < 1 ? (
        <div className="empty-cart-container">
          <MdShoppingCart className="empty-cart-icon" />
          <h2 className="empty-cart-message">Your cart is empty</h2>
          <p className="empty-cart-description">
            It looks like you haven't added anything to your cart yet. Start
            shopping now and fill your cart with amazing products!
          </p>
          <button
            className="cart-button"
            onClick={handleNavigateToProducts}
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <button className="cart-button" onClick={handleGotoCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
