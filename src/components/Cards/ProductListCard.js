import React from 'react';
import '../Cards/ProductListCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import StarIcon from '@mui/icons-material/Star';


function ProductListCard({ productsData, outOfStock }) {
    return (
        <>
            <div className="card-container">
                {/* <span className="card-badge">
                    {productsData.rating}/5
                </span> */}
                {/* <div class={`${outOfStock ? "card-text-overlay" : ""} space-S`}> */}
                {/* <div class={`${outOfStock ? "product-img-overlay" : ""}`}> */}
                <img className="product-img" src={`${productsData.image}`} />
                {outOfStock ?
                    <div className="card-header">Out of Stock</div> : ""}
                {/* </div> */}

                <div className="card-title">{productsData.productName}</div>
                <div className="card-content">&#8377;{productsData.price}</div>
                <div className="card-bottom">
                    <button className="btn-2">Save To Wishlist</button>
                    {/* <button><FavoriteBorderIcon /></button> */}
                    <button className='btn-1'>Add To Cart</button>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default ProductListCard