import "./HomePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BRAINFLIX_API_URL } from "./../../scripts/utils.js";
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

    //Added "defaultVideoId" state variable to show default video details
    const [defaultVideoId, setDefaultVideoId] = useState("");

    /**
     * when use clicks on likes image and likes count,
     *  It will call PUT axios calls(/videos/:videoId/likes) to increment likes count by 1.
     * @param {*} videoId 
     */
    async function likeVideo(videoId) {
        let videoIdForAPI = params ? selectedVideo.id : params.selectedVideoId;
        try {
            await axios.put(`${BRAINFLIX_API_URL}/videos/${videoIdForAPI}/likes`);
            setSelectedVideoData(videoIdForAPI);
        } catch (error) {
            console.log("Error in liking a video:", error);
        }
    }

    /**
     * Added deleteComment to delete given commentId from API using axios call
     * @param {*} commentId 
     */
    async function deleteComment(commentId) {
        let videoIdForAPI = params ? selectedVideo.id : params.selectedVideoId;
        try {
            await axios.delete(`${BRAINFLIX_API_URL}/videos/${videoIdForAPI}/comments/${commentId}`);
            setSelectedVideoData(videoIdForAPI);
        } catch (error) {
            console.log("Error in deleting a comment:", error);
        }
    }

    /**
     * Added postComment method to post new comment into APi using axios call      
     * @param {*} comment 
     */
    async function postComment(comment) {
        let videoIdForAPI = params ? selectedVideo.id : params.selectedVideoId;
        try {
            await axios.post(`${BRAINFLIX_API_URL}/videos/${videoIdForAPI}/comments`, comment);
            setSelectedVideoData(videoIdForAPI);
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
            const response = await axios.get(`${BRAINFLIX_API_URL}/videos/${selectedVideoId}`);
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
                const response = await axios.get(`${BRAINFLIX_API_URL}/videos`);                 
                setVideoList(response.data);
                setDefaultVideoId(response.data[0].id);                             
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
            setSelectedVideoData(defaultVideoId);
        }

    }, [params, defaultVideoId]);

    return (
        <div className="home">
            <SelectedVideo image={selectedVideo?.image} />

            <div className="home__container">
                <div className="home__column">

                    <div className="home__row">
                        <SelectedVideoDetails selectedVideo={selectedVideo}
                            likeVideo={likeVideo} />
                    </div>

                    <div className="home__row">
                        <Comments selectedVideoComments={selectedVideo?.comments}
                            postComment={postComment}
                            deleteComment={deleteComment} />
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