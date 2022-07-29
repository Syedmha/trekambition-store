import React from 'react'
import ProductListCard from '../Cards/ProductListCard';
import FilterBar from '../FilterBar/FilterBar'
import '../ProductList/ProductList.css';


function ProductList() {

    return (
        <>
            <main className="main-container product-grid-2-column">
                <FilterBar />
                <section className='pl space-XL'>
                    <div className='ProductList-Heading flex-row-container'>
                        <div className='very-sm-txt bold-txt'>Showing All Products</div>
                        <div><p>(Total 10 product)</p></div>
                    </div>
                    <div className='product-grid-3-column'>
                        <ProductListCard />
                        <ProductListCard />
                        <ProductListCard />
                        <ProductListCard />

                    </div>
                </section>
            </main>
        </>
    )
}

export default ProductList