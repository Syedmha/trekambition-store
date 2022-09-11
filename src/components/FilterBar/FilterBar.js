import React from 'react';
import { useProductFilterContext } from '../../common/context/ProductFilterContext';
import NavBar from '../Navbar/Navbar';
import './FilterBar.css';
import CheckBox from '../CheckBox/CheckBox'



function FilterBar() {

    const { productFilterState, productFilterDispatch } = useProductFilterContext();
    const { priceRange, categories, rating, sortBy } = productFilterState;
    const { Backpacks, Clothing, Shoes, CampingTools, Accessories } = categories;


    return (
        <>
            <section className='filterbar-section flex-col-container'>
                <div className='filterbar-header flex-row-container space-XL'>
                    <div className='sm-txt bold-txt'>Filters</div>
                    <button className='sm-txt' onClick={() => productFilterDispatch({ type: "CLEAR_FILTERS" })}>Clear</button>
                </div>
                <div className='filterbar-price-filter flex-col-container  filterbar-subheader space-XL'>
                    <div className='sm-txt bold-txt flex-row-container'>Price</div>
                    <span className='very-sm-txt'>({`₹${priceRange} / ₹10000`})</span>
                    <div className="flex-col-container flex-gap">
                        <div className="price-range flex-row-container ">
                            <p>1000</p>
                            <p>5000</p>
                            <p>10000</p>
                        </div>
                        <input
                            type="range"
                            name="rangeInput"
                            min="1000"
                            max="10000"
                            value={priceRange}
                            onChange={(e) => productFilterDispatch({ type: "SET_PRICE_RANGE", payload: parseInt(e.target.value) })}
                        />
                    </div>
                </div>
                <div className='filterbar-category-filter filterbar-subheader space-XL'>
                    <div className='sm-txt bold-txt flex-row-container subheader-margin'>Category</div>
                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <CheckBox
                                type="Backpacks"
                                checked={Backpacks}
                                changeHandler={() => productFilterDispatch({ type: "BACKPACKS" })}
                            />
                            {/* <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt flex-row-container" htmlFor='backpacks-category'>
                                    <input
                                        id="backpacks-category"
                                        className="input-checkbox"
                                        // name="Backpacks category"
                                        type="checkbox"
                                        checked={backpacks ? backpacks : false}
                                        // checked={backpacks}
                                        onChange={() => productFilterDispatch({ type: "BACKPACKS" })} />
                                    Backpacks
                                </label>
                            </div> */}
                        </li>
                        <li className="filter-options">
                            <CheckBox
                                type="Clothing"
                                checked={Clothing}
                                changeHandler={() => productFilterDispatch({ type: "CLOTHING" })}
                            />
                            {/* <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt  flex-row-container" htmlFor='clothing-category'>
                                    <input
                                        id="clothing-category"
                                        className="input-checkbox"
                                        // name="Clothing category"
                                        type="checkbox"
                                        checked={clothing ? clothing : false}
                                        // checked={clothing}
                                        onChange={() => productFilterDispatch({ type: "CLOTHING" })} />
                                    Clothing
                                </label>
                            </div> */}
                        </li>
                        <li className="filter-options">
                            <CheckBox
                                type="Shoes"
                                checked={Shoes}
                                changeHandler={() => productFilterDispatch({ type: "SHOES" })}
                            />
                            {/* <div className="checkbox">
                                <label className="input-label very-sm-txt light-txt  flex-row-container" htmlFor='shoes-category'>
                                    <input
                                        id="shoes-category"
                                        className="input-checkbox"
                                        // name="Shoes category"
                                        type="checkbox"
                                        checked={shoes ? shoes : false}
                                        // checked={shoes}
                                        onChange={() => productFilterDispatch({ type: "SHOES" })} />
                                    Shoes
                                </label>
                            </div> */}
                        </li>
                        <li className="filter-options">
                            <CheckBox
                                type="Camping Tools"
                                checked={CampingTools}
                                changeHandler={() => productFilterDispatch({ type: "CAMPING_TOOLS" })}
                            />
                            {/* <div className="checkbox">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container" htmlFor='camping-tools-category'>
                                    <input
                                        id="camping-tools-category"
                                        className="input-checkbox"
                                        // name="Camping Tools category"
                                        type="checkbox"
                                        checked={campingTools ? campingTools : false}
                                        // checked={campingTools}
                                        onChange={() => productFilterDispatch({ type: "CAMPING_TOOLS" })}
                                    />
                                    Camping Tools
                                </label>
                            </div> */}
                        </li>
                        <li className="filter-options">
                            <CheckBox
                                type="Accessories"
                                checked={Accessories}
                                changeHandler={() => productFilterDispatch({ type: "ACCESSORIES" })}
                            />
                            {/* <div className="checkbox">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container" htmlFor='accessories-category'>
                                    <input
                                        id="accessories-category"
                                        className="input-checkbox"
                                        // name="Trekking Accessories category"
                                        type="checkbox"
                                        checked={accessories ? accessories : false}
                                        // checked={accessories}
                                        onChange={() => productFilterDispatch({ type: "ACCESSORIES" })}
                                    />
                                    Accessories
                                </label>
                            </div> */}
                        </li>
                    </ul>
                </div>
                <div className='filterbar-rating-filter filterbar-subheader space-XL'>
                    <div className='sm-txt bold-txt flex-row-container subheader-margin'>Rating</div>
                    <ul className="ulist-style-none">
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input
                                        id="4-star-rating"
                                        className="input-radio"
                                        // name="sort"
                                        type="radio"
                                        checked={rating === 4}
                                        onChange={() => {
                                            productFilterDispatch({ type: "SET_RATING", payload: 4 })
                                        }}
                                    />
                                    4 stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt  light-txt  flex-row-container">
                                    <input
                                        id="3-star-rating"
                                        className="input-radio"
                                        // name="sort"
                                        type="radio"
                                        checked={rating === 3}
                                        onChange={() => {
                                            productFilterDispatch({ type: "SET_RATING", payload: 3 })
                                        }}
                                    />
                                    3 stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input
                                        id="2-star-rating"
                                        className="input-radio"
                                        // name="sort"
                                        type="radio"
                                        checked={rating === 2}
                                        onChange={() => {
                                            productFilterDispatch({ type: "SET_RATING", payload: 2 })
                                        }}
                                    />
                                    2 stars & Above
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container">
                                    <input
                                        id="1-star-rating"
                                        className="input-radio"
                                        // name="sort"
                                        type="radio"
                                        checked={rating === 1}
                                        onChange={() => {
                                            productFilterDispatch({ type: "SET_RATING", payload: 1 })
                                        }}
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
                                <label className="input-label very-sm-txt  light-txt  flex-row-container" htmlFor="price-ascending">
                                    <input
                                        id="price-ascending"
                                        className="input-radio"
                                        // name="sort"
                                        type="radio"
                                        checked={sortBy === "low_to_high"}
                                        onChange={() => {
                                            productFilterDispatch({ type: "SET_SORT_BY", payload: "low_to_high" })
                                        }}
                                    />
                                    Price - Low to High
                                </label>
                            </div>
                        </li>
                        <li className="filter-options">
                            <div className="radio">
                                <label className="input-label very-sm-txt light-txt  flex-row-container" htmlFor="price-descending">
                                    <input
                                        id="price-descending"
                                        className="input-radio"
                                        // name="sort"
                                        type="radio"
                                        checked={sortBy === "high_to_low"}
                                        onChange={() => {
                                            productFilterDispatch({ type: "SET_SORT_BY", payload: "high_to_low" })
                                        }}
                                    />
                                    Price - High to Low
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