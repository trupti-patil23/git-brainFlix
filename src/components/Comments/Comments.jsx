import "./Comments.scss";
import CommentImage from "./../../assets/images/Mohan-muruge.jpg";
import formatLocaleDate from "./../../scripts/utils.js";

/**
 * Comments component: Added this component for,
 * a. Join the Conversation section : Users to add new comment for selected video
 * b. List down all comments for selected video
 * @param {*} props 
 * @returns 
 */
const Comments = (props) => {

    //Get the comments array from props
    const commentsArray = props.selectedVideo.comments;

    return (
        <div className="comments">
            {/* Join the Conversation section : Users to add new comment for selected video */}
            <div className="comments__count-heading">
                {commentsArray.length} <span> Comments</span>
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

            {/* List down all comments for selected video */}
            <ul className="comments__list">
                {commentsArray.map((commentObject) => {
                    return (
                        <li key={commentObject.id} className="comments__item">
                            <div className="comments__main-container">
                                <div className="comments__item-image">
                                </div>
                                <div className="comments__sub-container">
                                    <div className="comments__row">
                                        <div className="comments__item-name">
                                            {commentObject.name}
                                        </div>
                                        <div className="comments__item-date">
                                            {formatLocaleDate(commentObject.timestamp)}
                                        </div>
                                    </div>
                                    <div className="comments__item-comment">
                                        {commentObject.comment}
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Comments;