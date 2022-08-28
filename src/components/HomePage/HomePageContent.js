import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import './HomePageContent.css';
import { Link } from "react-router-dom"
import { useProductsData } from '../../common/context/ProductsDataContext';


export default function HomePageContent() {
    const { categoryData } = useProductsData();
    console.log(categoryData);
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
                                <Link to="/productList">
                                    <button className='btn primary'>SHOP NOW</button>
                                </Link>
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

                        {
                            categoryData.map((cat) => {
                                if (cat.categoryName === "Backpacks") {
                                    return <div className='box-left'>
                                        <div className='cat-card-left'>
                                            <div className='cat-card-img-left'>
                                                <img src={`${cat.image}`} alt={cat.categoryName} />
                                                <div className='cat-container-left'>
                                                    <p className='sm-txt cat-card-title'>{cat.categoryName}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                        <div className='cat-cards-right '>
                            <div className='box flex-row-container'>

                                {
                                    categoryData.map((cat) => {
                                        if (cat.categoryName !== "Backpacks") {
                                            return <div className='cat-card'>
                                                <div className='cat-card-img'>
                                                    <img src={`${cat.image}`} alt={cat.categoryName} />
                                                    <div className='cat-container'>
                                                        <p className='sm-txt cat-card-title'>{cat.categoryName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
