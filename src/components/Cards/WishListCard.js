import React from 'react'

export default function WishListCard() {
    return (
        <div class="card-container">
            <span class="card-badge">20% off</span>
            <img class="product-img" src="/assets/images/nikeshoes.png" />
            <div class="card-title">Nike Epic React Running Shoe</div>
            <div class="card-content">Running Shoes</div>
            <div class="card-bottom">
                {/* <button><FavoriteBorderIcon /></button> */}
                <button className='btn primary'>Add To Cart</button>
            </div>
        </div>
    )
}
