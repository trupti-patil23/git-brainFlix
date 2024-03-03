import "./UploadVideoPage.scss";
import { Link } from "react-router-dom";
import UploadHeroImage from "./../../assets/images/Upload-video-preview.jpg";

/**
 * Added UploadVideoPage component to upload videos, It has below form feilds :
 * Video Textbox,Video Description textarea,Publish button,Cancel link
 * @returns 
 */
const UploadVideoPage = () => {
    return (
        <section className="upload">
            <h2 className="upload__title">Upload Video</h2>
            <div className="upload__hero-container">
                <div className="upload__label">VIDEO THUMBNAIL</div>
                <div className="upload__image-container">
                    <img className="upload__image"
                        src={UploadHeroImage} alt="UploadVideoPreview" />
                </div>
                <form className="upload__form-container" id="upload-form">
                    <label className="upload__label">TITLE YOUR VIDEO</label>
                    <input className="upload__video-name" type="text" placeholder="Add a title to your video" />
                    <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload__video-description" placeholder="Add a descrition to your video"></textarea>
                    <div className="upload__button-container">
                        <button className="upload__publish-button">PUBLISH</button>
                        <Link className="upload__cancel-link">CANCEL</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default UploadVideoPage;