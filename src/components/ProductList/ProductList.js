import { CategoryRounded } from '@mui/icons-material';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useProductFilterContext } from '../../common/context/ProductFilterContext';
import { useProductsData } from '../../common/context/ProductsDataContext';
import ProductListCard from '../Cards/ProductListCard';
import FilterBar from '../FilterBar/FilterBar'
import '../ProductList/ProductList.css';


function ProductList() {

    const { productsData } = useProductsData();
    const { filteredProductData } = useProductFilterContext();
    const { categoryName } = useParams();
    console.log(filteredProductData);


    return (
        <>
            <main className="main-container product-grid-2-column">
                <FilterBar />
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
                        {/* <ProductListCard /> */}
                        {/* <ProductListCard /> */}
                        {/* <ProductListCard /> */}
                        {/* <ProductListCard /> */}
                    </div>

                </section>
            </main>
        </>
    )
}

export default ProductList