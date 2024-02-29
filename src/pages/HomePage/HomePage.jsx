import "./HomePage.scss";
import SelectedVideo from "./../../components/SelectedVideo/SelectedVideo.jsx";
import SelectedVideoDetails from "./../../components/SelectedVideoDetails/SelectedVideoDetails.jsx";
import Comments from "./../../components/Comments/Comments.jsx";
import VideoList from "./../../components/VideoList/VideoList.jsx";
import videosData from "./../../data/video-details.json";
import { useState } from "react";

/**
 * HomePage : This Pages has below listed components:
 * <SelectedVideo>,<SelectedVideoDetails>,<Comments>, <VideoList>
 * @returns 
 */
const HomePage = () => {
    
    //Added "videoList" state variable to show all video's list(from video-details.json file)
    const [videoList, setVideoList] = useState(videosData);

    //Added "selectedVideo" state variable to show selected video's details
    const [selectedVideo, setSelectedVideo] = useState(videosData[0]);

    /**
     * Added  handleVideoClick function to find video with given id from videoList, 
       which has selected from given "NextVideo" section
     * @param {*} id 
     */
    function handleVideoClick(id) {
        const clickedVideo = videoList.find((video) => {
            return video.id === id;
        });

        /*Passed clickedVideo object to setSelectedVideo 
          high order function(refer selectedVideo state variable declaration) 
         and it will change the state of video component with the newly selected video*/
        setSelectedVideo(clickedVideo);
    }

    return (
        <div className="home">
            <SelectedVideo selectedVideo={selectedVideo} />

            <div className="home__container">
                <div className="home__column">

                    <div className="home__row">
                        <SelectedVideoDetails selectedVideo={selectedVideo} />
                    </div>

                    <div className="home__row">
                        <Comments selectedVideoComments={selectedVideo.comments} />
                    </div>

                </div>

                <div className="home__column">

                    <VideoList
                        videoList={videoList}
                        selectedVideo={selectedVideo}
                        handleVideoClick={handleVideoClick} />

                </div>

            </div>
        </div>
    );
}
export default HomePage;