import { Category } from '@mui/icons-material';
import React, { createContext, useReducer, useContext, useEffect, useState } from 'react'
import { productFilterReducer } from '../../reducers/productFilterReducer'
import { priceFilter, filterProductsByCategory, filterProductsByRatings, sortProducts } from '../helpers/productDataFilter';
import { useProductsData } from './ProductsDataContext';

const initialState = {
    priceRange: 100,
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

const ProductFilterContext = createContext(initialState);

const useProductFilterContext = () => useContext(ProductFilterContext);


function ProductFilterProvider({ children }) {
    const { productsData } = useProductsData();

    const [filteredProductData, setFilteredProductData] = useState(productsData);

    const [productFilterState, productFilterDispatch] = useReducer(productFilterReducer, initialState);

    useEffect(() => {
        setFilteredProductData(productsData);
    }, [productsData])

    useEffect(() => {
        // const priceRangeFilteredData = priceFilter(filteredProductData, productFilterState.priceRange);

        // setFilteredProductData(priceRangeFilteredData);

        const filteredProductsByCategory = filterProductsByCategory(filteredProductData, productFilterState.categories);

        setFilteredProductData(filteredProductsByCategory);


    }, [productFilterState.categories]);



    // console.log(filteredProductData);

    return (
        <ProductFilterContext.Provider value={{ filteredProductData, productFilterState, productFilterDispatch }}>
            {children}
        </ProductFilterContext.Provider>
    )
}

export { useProductFilterContext, ProductFilterProvider } 