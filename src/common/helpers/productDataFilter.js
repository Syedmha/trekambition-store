const priceFilter = (productsData, price) => {
    return productsData.filter((product) => product.price <= price);
}

const filterProductsByCategory = (productsData, categories) => {
    if (Object.values(categories).every(val => !val)) {
        return productsData;
    }
    else {
        return Object.keys(categories).reduce((filteredData, currKey) => categories[currKey] ? [...filteredData, ...productsData.filter(product => product.categoryName === currKey)] : [...filteredData], []);
    }
}

const filterProductsByRatings = (productsData, rating) => {
    return productsData.filter((product) => product.rating >= rating)
}


const sortProducts = (productsData, sortByState) => {
    if (sortByState === "low_to_high") {
        return productsData.sort((a, b) => a.price - b.price);

    }
    else if (sortByState === "high_to_low") {
        return productsData.sort((a, b) => b.price - a.price);
    }
    return productsData;
}

export { priceFilter, filterProductsByCategory, filterProductsByRatings, sortProducts };