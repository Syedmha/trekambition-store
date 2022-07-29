import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar"

export default function NavBar() {
    return <>
        <nav className="nav-container">
            <div className="nav-brandlogo"><h1 className="sm-txt">TrekAmbition</h1></div>
            <br></br>
            <br></br>
            {/* <ul>
                <li className="nav-item"><a href="#"><p className="sm-txt">Home</p></a></li>
            </ul> */}
            <SearchBar />
            <ul>
                <li className="nav-item"><a href="#"><p className="sm-txt">Login</p></a></li>
                <li className="nav-item"><a href="#"><p className="sm-txt">Wishlist</p></a></li>
                <li className="nav-item"><a href="#"><p className="sm-txt">Cart</p></a></li>
                <i className="nav-hamburger-menu fas fa-bars fa-2x"></i>
            </ul>
        </nav>
    </>
}