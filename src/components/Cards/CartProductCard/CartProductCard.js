import React from 'react'
import '../CartProductCard/CartProductCard.css'

function CartProductCard() {
    return (
        <div className='cartproduct-container flex-row-container'>
            <div className='image-div'>
                <img class="cart-product-img" src="/assets/images/nikeshoes.png" />
            </div>
            <div className='cartproduct-details'>
                <div><p className='very-sm-txt'>Product Name</p></div>
                <div className='flex-row-container'>
                    <p className='bold-txt very-sm-txt'>1300 &nbsp;</p>
                    <p className='very-sm-txt'>100</p>
                </div>
                <div>
                    <p className='very-sm-txt'>50% off</p>
                </div>
                <div className="card-quantity-btns flex-row-container">
                    <p>Quantity: &nbsp;</p>
                    <button className="decrease-qty centered-flex-row-container">-</button>
                    <span className="qty">1</span>
                    <button className="increase-qty centered-flex-row-container">+</button>
                </div>
                <button className='btn-otl primary-otl cart-btn'>Move To Wishlist</button>
                <button className='btn warning cart-btn'>Remove From Cart</button>
            </div>
        </div>


    )
}

export default CartProductCard