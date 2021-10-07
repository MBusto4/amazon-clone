export const initialState = {
    cart: [],
    user: {}
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
        case 'REMOVE_FROM_CART':

            // const itemId = action.itemId;
            // const newArrayofItems = state.cart.filter(
            //     (item) => item.id !== itemId
            // );
            // return { ...state, cart: newArrayofItems };

            //BUG HERE NOT PROPERLY DELETING
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id
            )
            let newCart = [...state.cart];
            if (index > 0) {
                newCart.splice(index, 1)

            } else {
                console.warn('CANNOT REMOVE ITEM')
            }
            return {
                ...state,
                cart: newCart
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;