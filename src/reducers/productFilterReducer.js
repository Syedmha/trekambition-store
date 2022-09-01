const initialState = {
    priceRange: 1000,
    categories: {
        backpacks: false,
        clothing: false,
        shoes: false,
        campingTools: false,
        accessories: false
    },
    rating: 0,
    sortBy: ""
};

const productFilterReducer = (state, action) => {
    switch (action.type) {
        case "PRICE_RANGE":
            return {
                ...state,
                priceRange: action.payload,
            }
        case "BACKPACKS":
            return {
                ...state,
                categories: {
                    ...state,
                    backpacks: !state.categories.backpacks,
                },
            }
        case "SHOES":
            return {
                ...state,
                categories: {
                    ...state,
                    shoes: !state.categories.shoes,
                },
            }
        case "CAMPING_TOOLS":
            return {
                ...state,
                categories: {
                    ...state,
                    campingTools: !state.categories.campingTools,
                },
            }
        case "ACCESSORIES":
            return {
                ...state,
                categories: {
                    ...state,
                    accessories: !state.categories.accessories,
                },
            }
        case "SET_RATING":
            return {
                ...state,
                rating: action.payload,
            }
        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: action.payload,
            }
        case "CLEAR_FILTERS":
            return {
                ...initialState,
            };
    }

}

export default { initialState, productFilterReducer }