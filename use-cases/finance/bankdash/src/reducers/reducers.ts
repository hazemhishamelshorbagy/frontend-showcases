export function reducer(state: any, action: any) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalQuanity: state.totalQuanity + 1,
                totalPrice: state.totalPrice + action.payload.price,
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                totalQuanity: state.totalQuanity - 1,
                totalPrice: state.totalPrice - action.payload.price,
            }

        default:
            return state;
    }
}