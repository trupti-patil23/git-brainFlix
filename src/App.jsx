import "./App.scss";
import Header from "./../src/components/Header/Header.jsx";
import SelectedVideo from "./../src/components/SelectedVideo/SelectedVideo.jsx";
import SelectedVideoDetails from "./../src/components/SelectedVideoDetails/SelectedVideoDetails.jsx";
import Comments from "./../src/components/Comments/Comments.jsx";
import VideoList from "./../src/components/VideoList/VideoList.jsx";
import videosData from "./../src/data/video-details.json";
import { useState } from "react";
/**
 * This is Parent Component for BrainFlix site, Which calls below child components.
 * Header, VideoList
 * @returns 
 * 
 */
function App() {

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
     and it will change the state of video component with the newwly selected video*/
    setSelectedVideo(clickedVideo);
  }

  return (
    <div className="app">

      <Header />

      <SelectedVideo selectedVideo={selectedVideo} />

      <div className="app__container">
        <div className="app__column">

          <div className="app__row">
            <SelectedVideoDetails selectedVideo={selectedVideo} />
          </div>

          <div className="app__row">
            <Comments selectedVideo={selectedVideo} />
          </div>

        </div>

        <div className="app__column">

          <VideoList 
            videoList={videoList}
            selectedVideo={selectedVideo}
            handleVideoClick={handleVideoClick} />

        </div>

      </div>
    </div>
  );
}

export default App;
