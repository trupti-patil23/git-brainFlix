import "./Header.scss";
import BrainFlixLogo from "./../../assets/logo/BrainFlix-logo.svg";
import searchImage from "./../../assets/images/Mohan-muruge.jpg"

const Header = () => {
    return (
        <header className="header">           
            <div className="header__row">
                <a href="#">
                    <img className="header__logo" alt="BrainFlixLogo" src={BrainFlixLogo} />
                </a>
            </div>

            <div className="header__middle-row">
                <input className="header__search-textbox" type="text" name="search" id="search" placeholder="Search"></input>
                <img className="header__image" alt="SearchImage" src={searchImage} />
            </div>
            <div className="header__row">
                <button className="header__upload-button"> UPLOAD</button>
            </div>
        </header>
    );
}

export default Header;