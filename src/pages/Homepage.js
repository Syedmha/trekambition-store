import FilterBar from "../components/FilterBar/FilterBar";
import HomePageContent from "../components/HomePage/HomePageContent";
import NavBar from "../components/Navbar/Navbar";
import ProducListPage from "./ProductListPage";
import { useProductsData } from "../common/context/ProductsDataContext";

export default function Homepage() {
    const products = useProductsData();
    console.log(products)
    return <>
        {/* <ProducListPage /> */}
        <HomePageContent />
    </>
}