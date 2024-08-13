export function cartReducer(cart,action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...cart,action.product]
        default:
           return cart
    }
}