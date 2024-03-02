import "./SelectedVideo.scss";

/**
 * SelectedVideo Component: Added this component to show selected video from "Nextvideo"
 * @param {*} image 
 * @returns 
 */
const SelectedVideo = ({image}) => {
    return (
        <div className="selected">           
            <video poster={image} className="selected__poster" controls> 
            </video>
        </div>
    );
}

export default SelectedVideo;