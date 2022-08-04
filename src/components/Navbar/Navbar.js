import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function NavBar() {
    return <>
        <nav className="nav-container">
            <div className="nav-brandlogo">
                <Link to="/">
                    <h1 className="sm-txt">TrekAmbition</h1>
                </Link>
            </div>
            <br></br>
            <br></br>
            <SearchBar />
            <ul>
                <li className="nav-item">
                    <Link to="/login"><p className="sm-txt">Login</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/wishlist"><p className="sm-txt">Wishlist</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart"><p className="sm-txt">Cart</p>
                    </Link>
                </li>
                <i className="nav-hamburger-menu fas fa-bars fa-2x"></i>
            </ul>
        </nav>
    </>
}