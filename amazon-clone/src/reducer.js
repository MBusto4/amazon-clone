export const initialState = {
    cart: []
}


export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        /*code for pushing an item into our basket. Our initial state starts as an empty 
        array then we copy the original state and push the item into the cart with the action.item*/
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        default:
            return state;
    }
}

export default reducer;