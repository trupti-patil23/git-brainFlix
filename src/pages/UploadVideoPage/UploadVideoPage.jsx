import "react-toastify/dist/ReactToastify.css";
import "./UploadVideoPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BRAINFLIX_API_URL } from "./../../scripts/utils.js";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import UploadHeroImage from "./../../assets/images/Upload-video-preview.jpg";

/**
 * Added UploadVideoPage component to upload videos, It has below form feilds :
 * Video Textbox,Video Description textarea,Publish button,Cancel link
 * @returns 
 */
const UploadVideoPage = () => {
    const navigate = useNavigate();

    /**
     * Added for Axios Call to post new video
     * @param {*} newVideo 
     */
    async function postNewVideo(newVideo) {
        try {           
            await axios.post(`${BRAINFLIX_API_URL}/videos`, newVideo);            
        } catch (error) {
            console.log("Error in posting a comment:", error);
        }
    }

    /**
     * Added function to handle form submission
     * @param {*} event 
     */
    function handleSubmit(event) {
        event.preventDefault();         

        //Create new video object to post
        const newVideo =
        {
            title: event.target.title.value,
            channel: "Red Cow",
            image: "images/upload-video.jpg",
            description: event.target.description.value,
            views: "0",
            likes: "0",
            duration: "4:01",
            video: "stream/brainStation_video.mp4",
            timestamp: Date.now(),
            comments: []
        }    
        
        postNewVideo(newVideo);
       
        // Show toast notification
        toast.success('User has uploaded a new video.', {
        onClose: () => {
          // Navigate to the home page after the toast is closed
          navigate("/");
        }
      });       
    }

    return (
        <section className="upload">
            <h2 className="upload__title">Upload Video</h2>
            <form onSubmit={handleSubmit}>
                <div className="upload__main-container">

                    <div className="upload__hero-container">
                        <div className="upload__label">VIDEO THUMBNAIL</div>
                        <div className="upload__image-container">
                            <img className="upload__image"
                                src={UploadHeroImage} alt="UploadVideoPreview" />
                        </div>
                    </div>

                    <div className="upload__form-container">
                        <label className="upload__label">TITLE YOUR VIDEO</label>
                        <input className="upload__video-name" type="text" id="title" placeholder="Add a title to your video" />
                        <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload__video-description" id="description" placeholder="Add a descrition to your video"></textarea>
                    </div>

                    <div className="upload__button-container">
                        <button className="upload__publish-button"  type="submit">PUBLISH</button>
                        <Link className="upload__cancel-link"
                            onClick={() => navigate(-1)}>CANCEL</Link>                          
                    </div>

                    <ToastContainer />
                </div>
            </form>                 
        </section>        
    );
}

export default UploadVideoPage;