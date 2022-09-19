import React, { createContext, useEffect, useState, useContext } from 'react'
import axios from 'axios'

const ProductsDataContext = createContext({
    productsData: [],
    setProductsData: () => { },
});

const useProductsData = () => useContext(ProductsDataContext);

const ProductsDataProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const getProductsData = async () => {
        try {
            const productsDataResponse = await axios.get('/api/products');
            if (productsDataResponse.status === 200) {
                setProductsData(productsDataResponse.data.products);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const getCatagoryData = async () => {
        try {
            const categoryDataResponse = await axios.get('/api/categories');
            if (categoryDataResponse.status === 200) {
                setCategoryData(categoryDataResponse.data.categories);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductsData();
        getCatagoryData();
    }, [])

    return (
        <ProductsDataContext.Provider value={{ productsData, categoryData }}>
            {children}
        </ProductsDataContext.Provider>
    )
}

export { useProductsData, ProductsDataProvider };