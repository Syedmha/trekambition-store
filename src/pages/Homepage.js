import FilterBar from "../components/FilterBar/FilterBar";
import HomePageContent from "../components/HomePage/HomePageContent";
import NavBar from "../components/Navbar/Navbar";
import ProducListPage from "./ProductListPage";

export default function Homepage() {
    return <>
        <NavBar />
        <ProducListPage />
        {/* <HomePageContent /> */}
    </>
}