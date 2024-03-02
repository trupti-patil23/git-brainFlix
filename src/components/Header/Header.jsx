import "./Header.scss";
import { Link } from "react-router-dom";
import BrainFlixLogo from "./../../assets/logo/BrainFlix-logo.svg";
import searchImage from "./../../assets/images/Mohan-muruge.jpg";

/**
 * Header Component : Added to display BrainFlix logo, Search Textbox,Image and Upload Button
 * @returns 
 */
const Header = () => {
    return (
        <header className="header">
            <div className="header__row">
                <Link to="/">
                    <img className="header__logo" alt="BrainFlixLogo" src={BrainFlixLogo} />
                </Link>
            </div>
            <input className="header__search-textbox" type="text" name="search" id="search" placeholder="Search"></input>
            <img className="header__image" alt="SearchImage" src={searchImage} />
            <Link className="header__link" to="/upload">                
                <button className="header__upload-button"> UPLOAD</button>
            </Link>
        </header>
    );
}

export default Header;