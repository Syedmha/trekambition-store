import { CategoryRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useProductFilterContext } from '../../common/context/ProductFilterContext';
import { useProductsData } from '../../common/context/ProductsDataContext';
import ProductListCard from '../Cards/ProductListCard';
import FilterBar from '../FilterBar/FilterBar'
import '../ProductList/ProductList.css';
import { fetchCategoryLabel } from '../../common/helpers/productDataFilter';


function ProductList() {

    const { productsData } = useProductsData();
    const { filteredProductData, productFilterState, productFilterDispatch } = useProductFilterContext();
    const { categoryName } = useParams();
    console.log(filteredProductData);
    const [loading, setLoading] = useState(true);
    const sleep = milliSeconds => {
        return new Promise(resolve => setTimeout(resolve, milliSeconds));
    }

    useEffect(() => {
        sleep(1500).then(() => setLoading(false));
    }, []);

    useEffect(() => {
        console.log("refresh")
    }, [])

    useEffect(() => {
        const categoryLabel = fetchCategoryLabel(categoryName);
        productFilterDispatch({ type: "CLEAR_FILTERS" });
        if (categoryLabel) {
            productFilterDispatch({ type: categoryLabel });
        }
    }, [categoryName, loading])


    return (
        <>
            <main className="main-container product-grid-2-column">
                <FilterBar />
                {loading ? "loading..." :
                    <section className='pl space-XL'>
                        <div className='ProductList-Heading flex-row-container'>
                            <div className='very-sm-txt bold-txt'>Showing All Products</div>
                            <div><p>(Total {filteredProductData.length} product)</p></div>
                        </div>
                        <div className='product-grid-3-column'>
                            {
                                filteredProductData.map((product) => {
                                    return <ProductListCard productsData={product} key={product._id} outOfStock={product.isOutOfStock} />
                                })
                            }
                        </div>

                    </section>}

            </main>
        </>
    )
}

export default ProductList