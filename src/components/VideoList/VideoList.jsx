import "./VideoList.scss";
import { Link } from "react-router-dom";

/**
 * VideoList Component:Added to list down all the video's details(channel,title,image) 
 * from video-details.json file 
 * @param {videoList, selectedVideo} 
 * @returns 
 */
const VideoList = ({videoList, selectedVideo}) => {
    return (<section className="videos">
        <h2 className="videos__title">NEXT VIDEOS</h2>
        <ul className="videos__list">
            {   //Iterate videoList using map and display channel,title,image property of each video
                videoList.filter((video) => (video.id !== selectedVideo.id))
                    .map((video) => {
                        return (
                            <Link className="videos__link" key={video.id} to={`/videos/${video.id}`}>
                                <li className="videos__item">

                                    <div className="videos__image-container">
                                        <img className="videos__image" src={`${process.env.REACT_APP_API_URL}/${video.image}`} alt="VideoImage"></img>
                                    </div>
                                    
                                    <div className="videos__title-container">
                                        <div className="videos__image-title">
                                            {video.title}
                                        </div>
                                        <div className="videos__image-channel">
                                            {video.channel}
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        );
                    })
            }
        </ul>
    </section>
    );
}
export default VideoList;