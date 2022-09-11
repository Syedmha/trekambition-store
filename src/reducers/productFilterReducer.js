const initialState = {
    priceRange: 10000,
    categories: {
        Backpacks: false,
        Clothing: false,
        Shoes: false,
        CampingTools: false,
        Accessories: false
    },
    rating: 0,
    sortBy: ""
};

const productFilterReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRICE_RANGE":
            return {
                ...state,
                priceRange: action.payload,
            }
        case "BACKPACKS":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    Backpacks: !state.categories.Backpacks,
                },
            }
        case "CLOTHING":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    Clothing: !state.categories.Clothing,
                },
            }
        case "SHOES":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    Shoes: !state.categories.Shoes,
                },
            }
        case "CAMPING_TOOLS":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    CampingTools: !state.categories.CampingTools,
                },
            }
        case "ACCESSORIES":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    Accessories: !state.categories.Accessories,
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

export { productFilterReducer }