import React from 'react';
import './HomePageContent.css';

export default function HomePageContent() {
    return (
        <>
            <main className='main-section'>
                <section className='hero-section flex-row-container'>
                    <div className='hero-left centered-flex-col-container space-S'>
                        <div className='hero-info '>
                            <h1 className='h1 hero-heading'>GET READY FOR YOUR NEXT TREK</h1>
                            <p className='h4 hero-content'>All your trekking essentials at one place</p>
                            <div className='hero-info-btns centered-flex-row-container'>
                                {/* <button className='btn primary'>OFFERS</button> */}
                                <button className='btn primary'>SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className='hero-right centered-flex-row-container'><img src='/assets/hero-img-1.svg' /></div>
                </section>
                <section className='category-section space-S'>
                    <div className='h3 category-title'>
                        CATEGORIES
                    </div>
                    <div className='category-cards flex-row-container'>
                        <div className='box-left'>
                            <div className='cat-card-left'>
                                <div className='cat-card-img-left'>
                                    <img src='/assets/images/cat-backpacks-img.svg' />
                                    <div className='cat-container-left'>
                                        <p className='sm-txt cat-card-title'>Backpacks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cat-cards-right '>
                            <div className='box flex-row-container'>
                                <div className='cat-card'>
                                    <div className='cat-card-img'>
                                        <img src='/assets/images/cat-clothing-img.svg' />
                                        <div className='cat-container'>
                                            <p className='sm-txt cat-card-title'>Clothing</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cat-card'>
                                    <div className='cat-card-img'>
                                        <img src='/assets/images/cat-camping-img.svg' />
                                        <div className='cat-container'>
                                            <p className='sm-txt cat-card-title'>Camping Tools</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cat-card'>
                                    <div className='cat-card-img'>
                                        <img src='/assets/images/cat-shoes-img.svg' />
                                        <div className='cat-container'>
                                            <p className='sm-txt cat-card-title'>Shoes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cat-card'>
                                    <div className='cat-card-img'>
                                        <img src='/assets/images/cat-accessories-img.svg' />
                                        <div className='cat-container'>
                                            <p className='sm-txt cat-card-title'>Trekking Accessories
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
