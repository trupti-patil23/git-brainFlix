import './VideoList.scss';

/**
 * VideoList Component:Added to list down all the video's details(channel,title,image) 
 * from video-details.json file
 * @param {*} props 
 * @returns 
 */
const VideoList = (props) => {
    //Get the video's list from props and set it to videoListData
    const videoListData = props.videoList;

    return (<section className="videos">
        <h2 className="videos__title">NEXT VIDEOS</h2>
        <ul className="videos__list">
            {   //Iterate videoListData using map and display channel,title,image property of each video
                videoListData.map((video) => {
                    return (
                        <li key={video.id} className="videos__item">
                            <div className="videos__image-container">
                                <img className="videos__image" src={video.image} alt="VideoImage"></img>
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
                    );
                })
            }
        </ul>
    </section>
    );
}
export default VideoList;