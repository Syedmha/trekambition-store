import React from 'react'
import CartBill from '../Cards/CartBill/CartBill'
import CartProductCard from '../Cards/CartProductCard/CartProductCard'
import WishListCard from '../Cards/WishListCard'
import '../Cart/Cart.css'


function Cart() {
    return (
        <section className='cart-content'>
            <div className='cart-title centered-flex-row-container'>
                <h1 className='h3'>MY CART (2)</h1>
            </div>
            <div className='cart-body flex-row-container'>
                <div className='cart-productcard-section centered-flex-row-container'>
                    <CartProductCard />
                    <CartProductCard />
                    <CartProductCard />
                </div>
                <div className='cart-billcard'>
                    <CartBill />
                </div>
            </div>
        </section>
    )
}

export default Cart