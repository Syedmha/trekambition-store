import { Category } from '@mui/icons-material';
import React, { createContext, useReducer, useContext, useEffect, useState } from 'react'
import { productFilterReducer } from '../../reducers/productFilterReducer'
import { priceFilter, filterProductsByCategory, filterProductsByRatings, sortProducts } from '../helpers/productDataFilter';
import { useProductsData } from './ProductsDataContext';

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
        const priceRangeFilteredData = priceFilter(productsData, productFilterState.priceRange);
        console.log("useffect ran")


        const filteredProductsByCategory = filterProductsByCategory(priceRangeFilteredData, productFilterState.categories);

        const filteredtProductsByRating = filterProductsByRatings(filteredProductsByCategory, productFilterState.rating);

        const sortedProductsByPrice = sortProducts(filteredtProductsByRating, productFilterState.sortBy);

        setFilteredProductData(sortedProductsByPrice);
    }, [productFilterState]);



    // console.log(filteredProductData);

    return (
        <ProductFilterContext.Provider value={{ filteredProductData, productFilterState, productFilterDispatch }}>
            {children}
        </ProductFilterContext.Provider>
    )
}

export { useProductFilterContext, ProductFilterProvider } 