import "./Comments.scss";
import CommentImage from "./../../assets/images/Mohan-muruge.jpg"
/**
 * Comments component: Added this component for,
 * a. Join the Conversation section : Users to add new comment for selected video
 * b. List down all comments for selected video
 * @param {*} props 
 * @returns 
 */
const Comments = (props) => {

    //Get the selected video from props and set it to selectedVideo
    const selectedVideo = props.selectedVideo;   

    return (        
        <div className="comments">            
            {/* Join the Conversation section : Users to add new comment for selected video */}
            <div className="comments__count-heading">
                {selectedVideo.comments.length} <span> Comments</span>
            </div>
            <div className="comments__title">JOIN THE CONVERSATION</div>

            <div className="comments__container">
                <img className="comments__image" 
                src={CommentImage} alt="MohanMurugeImage" />

                <form className="comments_form" id="comment-form">
                    <textarea className="comments__textarea" name="comments" id="comments"
                        placeholder="Add a new comment">
                    </textarea>

                    <button className="comments__button">COMMENT</button>
                </form>
            </div>

            {/* List down all comments for selected video 
            <ul className="comments_list">
            </ul>
            <div className="comments__last-divider"></div>*/}
        </div>
    );
}

export default Comments;