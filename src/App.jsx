import './App.scss';
import Header from './../src/components/Header/Header.jsx';
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

  /* Added state variable "videoList" to show video list(from video-details.json file) */
  const [videoList, setVideoList] = useState(videosData);
  console.log("App file:--", videoList);

  return (
    <div className="App">
      <Header />
      <VideoList videoList={videoList} /> 
    </div>
  );
}

export default App;
