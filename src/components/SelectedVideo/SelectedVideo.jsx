import "./SelectedVideo.scss";

/**
 * SelectedVideo Component: Added this component to show selected video from "Nextvideo"
 * @param {*} props 
 * @returns 
 */
const SelectedVideo = (props) => {
    return (
        <div className="selected">
            <video poster={props.selectedVideo.image} className="selected__poster" controls>
            {/* <video poster={image} className="selected__poster" controls>  */}
            </video>
        </div>
    );
}

export default SelectedVideo;