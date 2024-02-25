import "./SelectedVideoDetails.scss";
import formatLocaleDate from "./../../scripts/utils.js" 
import ViewImage from "./../../assets/icons/views.svg";
import LikesImage from "./../../assets/icons/likes.svg";

/**
 * SelectedVideoDetails Component: Added this component to display selected(from NextVideo section) video's details as,
 * title, channel,timestamp,likes,views,description
 * @param {*} props 
 * @returns 
 */

const SelectedVideoDetails = (props) => {

    //Get the selected video from props and set it to selectedVideo
    const selectedVideo = props.selectedVideo;

    return (
        <section className="details">
            <h2 className="details__title">
                {selectedVideo.title}
            </h2>
            <div className="details__container">
                <div className="details__channel-timestamp">
                    <div className="details__channel">
                        <span>By </span>
                        {selectedVideo.channel}
                    </div>
                    <div className="details__timestamp">
                        {formatLocaleDate(selectedVideo.timestamp)}
                    </div>
                </div>
                <div className="details__views-likes">
                    <div>
                        <img className="details__icons" src={ViewImage} alt="ViewsImage"></img>
                        {selectedVideo.views}
                    </div>
                    <div>
                    <img className="details__icons" src={LikesImage} alt="ViewsImage"></img>
                        {selectedVideo.likes}
                    </div>
                </div>
            </div>
            <div className="details__description">
                {selectedVideo.description}
            </div>

        </section>
    );
}
export default SelectedVideoDetails;
