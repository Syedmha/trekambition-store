const userDataReducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
        case "USER_LOGOUT":
            return {
                ...state,
                ...action.payload
            }
        // case SAVE_USER_WISHLIST:
        //     return {
        //         ...state,
        //         wishList: [...action.payload]
        //     }
        // case SAVE_USER_CART:
        //     return {
        //         ...state,
        //         cart: [...action.payload]
        //     }
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishList: [...state.wishList, action.playload]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishList: [...state.wishList.filter(item => item._id !== action.playload._id)]
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: [...state.cart.filter(item => item._id !== action.payload._id)]
            }
    }
}

export { userDataReducer };