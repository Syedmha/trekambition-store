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
                                <label className="input-label very-sm-txt light-txt flex-row-container" htmlFor="electronics-category">
                                    <input id="electronics-category" className="input-checkbox" name="electronics category" type="checkbox" />
                                    Electronics
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt  flex-row-container" htmlFor="fashion-category">
                                    <input id="fashion-category" className="input-checkbox" name="fashion category" type="checkbox" />
                                    Fashion
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt  flex-row-container" htmlFor="sports-category">
                                    <input id="sports-category" className="input-checkbox" name="sports category" type="checkbox" />
                                    Sports
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="checkbox">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container" htmlFor="accessories-category">
                                    <input id="accessories-category" className="input-checkbox" name="accessories category" type="checkbox" />
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