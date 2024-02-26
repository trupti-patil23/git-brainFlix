import "./Header.scss";
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
                <img className="header__logo" alt="BrainFlixLogo" src={BrainFlixLogo} />
            </div>
            <input className="header__search-textbox" type="text" name="search" id="search" placeholder="Search"></input>
            <img className="header__image" alt="SearchImage" src={searchImage} />
            <button className="header__upload-button"> UPLOAD</button>
        </header>
    );
}

export default Header;