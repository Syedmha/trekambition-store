const priceFilter = (productsData, price) => {
    return productsData.filter((product) => product.price <= price);
}

// const filterProductsByCategory = (productsData, category) => {
//     return productsData.filter((product) => product.categoryName === category);
// }

const filterProductsByCategory = (productsData, categories) => {
    if (Object.values(categories).every(val => !val)) {
        console.log("ran1")

        return productsData;
    }
    else {
        console.log("ran2")

        return Object.keys(categories).reduce((filteredData, currKey) => categories[currKey] ? [...filteredData, ...productsData.filter(product => product.categoryName === currKey)] : [...filteredData], []);
    }
    // return cat.reduce((filteredData, currKey) =>
    //     cat[currKey] ? "true" : "false", [])


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