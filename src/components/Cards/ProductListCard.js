import React from 'react';
import '../Cards/ProductListCard.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function ProductListCard() {
    return (
        <><div class="card-container">
            <span class="card-badge">20% off</span>
            <img class="product-img" src="/assets/images/nikeshoes.png" />
            <div class="card-title">Nike Epic React Running Shoe</div>
            <div class="card-content">Running Shoes</div>
            <div class="card-bottom">
                <button class="btn-2">Save To Wishlist</button>
                {/* <button><FavoriteBorderIcon /></button> */}
                <button className='btn-1'>Add To Cart</button>
            </div>
        </div>
        </>
    )
}

export default ProductListCard