import "./SelectedVideoDetails.scss";
import formatLocaleDate from "./../../scripts/utils.js"
import ViewImage from "./../../assets/icons/views.svg";
import LikesImage from "./../../assets/icons/likes.svg";

/**
 * SelectedVideoDetails Component: Added this component to display selected(from NextVideo section) video's details as,
 * title, channel,timestamp,likes,views,description
 * @param {*} selectedVideo 
 * @returns 
 */
const SelectedVideoDetails = ({ selectedVideo, likeVideo}) => {
    /**
     * Added to allow user to like the selected video
     * @param {*} event 
     */
    const handleLikes = (event) => {                
        likeVideo(event.target.id);
    }

    if (selectedVideo) {
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
                        <div className="details__vl-subcontainer">
                            <div>
                                <img className="details__icons" src={ViewImage} alt="ViewsImage"></img>
                            </div>
                            <div className="details__views">
                                {selectedVideo.views}
                            </div>
                        </div>
                        <div className="details__vl-subcontainer"
                            onClick={handleLikes} id={selectedVideo.id}>
                            <div>
                                <img className="details__icons" src={LikesImage} alt="LikesImage"></img>
                            </div>
                            <div className="details__likes">
                                {selectedVideo.likes}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details__description">
                    {selectedVideo.description}
                </div>

            </section>
        );
    }
}
export default SelectedVideoDetails;
