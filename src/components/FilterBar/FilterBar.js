import React from 'react';
import NavBar from '../Navbar/Navbar';
import './FilterBar.css';



function FilterBar() {
    return (
        <>
            <section className='filterbar-section flex-col-container'>
                <div className='filterbar-header flex-row-container space-XL'>
                    <div className='sm-txt bold-txt'>Filters</div>
                    <div className='sm-txt'>Clear</div>
                </div>
                <div className='filterbar-price-filter flex-col-container  filterbar-subheader space-XL'>
                    <div className='sm-txt bold-txt flex-row-container'>Price</div>
                    <div className="flex-col-container flex-gap">
                        <div className="price-range flex-row-container ">
                            <p>100</p>
                            <p>500</p>
                            <p>1000</p>
                        </div>
                        <input
                            type="range"
                            name="rangeInput"
                            min="100"
                            max="1000"
                        />
                    </div>
                </div>
                <div className='filterbar-category-filter filterbar-subheader space-XL'>
                    <div className='sm-txt bold-txt flex-row-container subheader-margin'>Category</div>
                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt flex-row-container">
                                    <input id="backpacks-category" className="input-checkbox" name="Backpacks category" type="checkbox" />
                                    Backpacks
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input id="clothing-category" className="input-checkbox" name="Clothing category" type="checkbox" />
                                    Clothing
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input id="shoes-category" className="input-checkbox" name="Shoes category" type="checkbox" />
                                    Shoes
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container">
                                    <input id="camping-tools-category" className="input-checkbox" name="Camping Tools category" type="checkbox" />
                                    Camping Tools
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container">
                                    <input id="accessories-category" className="input-checkbox" name="Trekking Accessories category" type="checkbox" />
                                    Accessories
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='filterbar-rating-filter filterbar-subheader space-XL'>
                    <div className='sm-txt bold-txt flex-row-container subheader-margin'>Rating</div>
                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input id="4-star-rating" className="input-radio" name="sort" type="radio" />
                                    4 stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container">
                                    <input id="3-star-rating" className="input-radio" name="sort" type="radio" />
                                    3 stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input id="2-star-rating" className="input-radio" name="sort" type="radio"
                                    />
                                    2 stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input id="1-star-rating" className="input-radio" name="sort" type="radio"
                                    />
                                    1 star & Above
                                </label>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className='filterbar-sortby-filter filterbar-subheader space-XL'>
                    <div className='sm-txt bold-txt flex-row-container subheader-margin'>Sort By</div>
                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container" htmlFor="price-descending">
                                    <input id="price-descending" className="input-radio" name="sort" type="radio" />
                                    Price - High to Low
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container" htmlFor="price-ascending">
                                    <input id="price-ascending" className="input-radio" name="sort" type="radio" />
                                    Price - Low to High
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container" htmlFor="rating-descending">
                                    <input id="rating-descending" className="input-radio" name="sort" type="radio"
                                    />
                                    Rating - High to Low
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* <NavBar /> */}
        </>
    )
}

export default FilterBar