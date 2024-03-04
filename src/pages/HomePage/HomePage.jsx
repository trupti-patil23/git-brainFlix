import "./HomePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BRAINFLIX_API_KEY, BRAINFLIX_DEFAULT_VIDEO_ID, BRAINFLIX_API_URL } from "./../../scripts/utils.js"
import SelectedVideo from "./../../components/SelectedVideo/SelectedVideo.jsx";
import SelectedVideoDetails from "./../../components/SelectedVideoDetails/SelectedVideoDetails.jsx";
import Comments from "./../../components/Comments/Comments.jsx";
import VideoList from "./../../components/VideoList/VideoList.jsx";

/**
 * HomePage : This Pages has below listed components:
 * <SelectedVideo>,<SelectedVideoDetails>,<Comments>, <VideoList>
 * @returns 
 */
const HomePage = () => {
    const params = useParams();

    //Added "videoList" state variable to show all video's list
    const [videoList, setVideoList] = useState([]);

    //Added "selectedVideo" state variable to show selected video's details
    const [selectedVideo, setSelectedVideo] = useState({});

    /**
     * Added postComment method to post new comment      * 
     * @param {*} comment 
     */
    async function postComment(comment) {
        try {
            const response = await axios.post(`${BRAINFLIX_API_URL}/videos/${params.selectedVideoId}/comments?api_key=${BRAINFLIX_API_KEY}`, comment);
            setSelectedVideoData(params.selectedVideoId);
        } catch (error) {
            console.log("Error in posting a comment:", error);
        }
    }

    /**
     * Added to get selected Video data from API for give video Id
     * @param {*} selectedVideoId 
     * @returns 
     */
    async function getSelecetdVideoData(selectedVideoId) {
        try {
            const response = await axios.get(`${BRAINFLIX_API_URL}/videos/${selectedVideoId}?api_key=${BRAINFLIX_API_KEY}`);
            return response.data;
        } catch (error) {
            console.log("Error in getting selected Video data from method getSelecetdVideoData()", error);
        }
    }

    /**
     *Below useEffect() will run only once, when component mounts for the first time
     */
    useEffect(() => {               
        async function getVideosList() {
            try {
                const response = await axios.get(`${BRAINFLIX_API_URL}/videos?api_key=${BRAINFLIX_API_KEY}`);
                setVideoList(response.data);
            } catch (error) {
                console.log("Error in getting videos list from useEffect()->getVideosList() method", error);
            }
        }
        getVideosList();
    }, []);

    /**
     * Added to get selected video data from API
     * @param {*} videoId 
     */
    async function setSelectedVideoData(videoId) {      
        setSelectedVideo(await getSelecetdVideoData(videoId));
    }

    /**
     * Below useEffect() will run everytime, when param changes its state
     */
    useEffect(() => {

        if (params.selectedVideoId) {
            setSelectedVideoData(params.selectedVideoId);
        } else {
            setSelectedVideoData(BRAINFLIX_DEFAULT_VIDEO_ID);
        }

    }, [params]);    

    return (
        <div className="home">

            <SelectedVideo image={selectedVideo.image} />

            <div className="home__container">
                <div className="home__column">

                    <div className="home__row">
                        <SelectedVideoDetails selectedVideo={selectedVideo} />
                    </div>

                    <div className="home__row">
                        <Comments selectedVideoComments={selectedVideo.comments}
                            postComment={postComment} />
                    </div>

                </div>

                <div className="home__column">

                    <VideoList
                        videoList={videoList}
                        selectedVideo={selectedVideo}
                    />

                </div>

            </div>
        </div>
    );
}
export default HomePage;