import React from 'react'
import WishListCard from '../Cards/WishListCard'
import '../WishList/WishList.css'

function WishList() {
    return (
        <section className='wishlist-content'>
            <div className='wishlist-title centered-flex-row-container'>
                <h1 className='h3'>My Wishlist</h1>
            </div>
            <div className='wishlist-body centered-flex-row-container'>
                <WishListCard />
                <WishListCard />
                <WishListCard />
                <WishListCard />
                <WishListCard />
                <WishListCard />
            </div>
        </section>
    )
}

export default WishList