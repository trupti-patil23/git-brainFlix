import './App.scss';
import Header from './../src/components/Header/Header.jsx';
import SelectedVideo from './../src/components/SelectedVideo/SelectedVideo.jsx'
import VideoList from './../src/components/VideoList/VideoList.jsx';
import videosData from './../src/data/video-details.json'
import { useState } from 'react';
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

  //Added function to get video details, which has selected from given "NextVideo" section
  function handleVideoClick(id){
    console.log("handleVideoClick clicked", id);
  }

  return (
    <div className="App">

      <Header />

      <SelectedVideo selectedVideo={selectedVideo} />

      <VideoList
        videoList={videoList}
        selectedVideo={selectedVideo}
        handleVideoClick={handleVideoClick}
      />

    </div>
  );
}

export default App;
