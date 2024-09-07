export function cartReducer(cart, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        // Find the existing item in the cart
        let foundItem = cart.find(item => item.id === action.product.id);
  
        if (foundItem) {
          // Return a new array with the updated quantity for the found item
          return cart.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + action.quantity } // Return a new object with updated quantity
              : item // Return the original item
          );
        } else {
          // Return a new array with the new item added
          return [...cart, { ...action.product, quantity: action.quantity }];
        }
  
      case "REMOVE_ITEM":
        // Return a new array excluding the item with the specified ID
        return cart.filter(item => item.id !== action.productId);

        case "UPDATE_ITEM":
          return cart.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: action.quantity } // Return a new object with updated quantity
              : item // Return the original item
          );
  
      default:
        return cart;
    }
  }
  