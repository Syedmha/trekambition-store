import React, { createContext, useReducer } from 'react'
import { initialState, productFilterReducer } from '../../reducers/productFilterReducer'

const ProductFilterContext = createContext(initialState);

function ProductFilterProvider({ children }) {
    const [productFilterState, productFilterDispatch] = useReducer(productFilterReducer, initialState);
    return (
        <ProductFilterProvider value={{ productFilterState, productFilterDispatch }}>
            {children}
        </ProductFilterProvider>
    )
}

export { ProductFilterProvider } 