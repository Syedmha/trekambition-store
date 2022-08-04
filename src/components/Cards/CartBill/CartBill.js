import React from 'react'
import '../CartBill/CartBill.css'

function CartBill() {
    return (
        <section className='cart-billcard-container flex-col-container'>
            <div className='billcard-title h4 bold-txt'>
                PRICE DETAILS
            </div>
            <hr className='bill-hr' />
            <div className='bill-item flex-row-container'>
                <p className='sm-txt'>Price</p>
                <p className='sm-txt'>1400</p>
            </div>
            <div className='bill-item flex-row-container'>
                <p className='sm-txt'>Discount</p>
                <p className='sm-txt'>1400</p>
            </div>
            <div className='bill-item flex-row-container'>
                <p className='sm-txt'>Delivery Charges</p>
                <p className='sm-txt'>1400</p>
            </div>
            <hr className='bill-hr' />
            <div className='bill-item flex-row-container'>
                <p className='h4 bold-txt'>TOTAL AMOUNT</p>
                <p className='h4 bold-txt'>1400</p>
            </div>
            <hr className='bill-hr' />
            <div className='bill-item flex-row-container'>
                <p className='sm-txt'>You will save ₹1999 on this order</p>
            </div>
            <button className='btn primary order-btn'>PLACE ORDER</button>
        </section >
    )
}

export default CartBill