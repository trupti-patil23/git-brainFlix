import "./Comments.scss";
import CommentImage from "./../../assets/images/Mohan-muruge.jpg";
import DeleteComment from "./../../assets/icons/icon-delete.svg";
import formatLocaleDate from "./../../scripts/utils.js";

/**
 * Comments component: Added this component for,
 * a. Join the Conversation section : Users to add new comment for selected video
 * b. List down all comments for selected video
 * @param {*} selectedVideoComments 
 * @returns 
 */
const Comments = ({ selectedVideoComments, postComment, deleteComment }) => {

    const form = document.getElementById("comment-form");
    let commentsArray = [];

    /**
     * Added to delete comment from API, when user clicks on Delete icon,
     * @param {*} event 
     */
    const handleDelete = (event) => {       
        deleteComment(event.target.id);
    }

    /**
     * This get called onChange of value in the textarea
     * @param {*} event 
     */
    const handleChange = (event) => {
        let target = event.target;
        if (target.matches(".comments__textarea")) {
            target.classList.remove("comments__textarea--error");
        }
    };

    /**
     * When you click on "COMMENT" button,handleSubmit function get called.
     * @param {*} event 
     * @returns 
     */
    const handleSubmit = async (event) => {
        event.preventDefault(); //prevent form from submitting        
        let returnFlag = false;

        /*When you click on COMMENT Button,and if element is empty,
          then prevent form from submitting.*/
        let commentTextArea = event.target.comment;
        let comment = commentTextArea.value;

        if (comment === "" || (comment != null && comment.trim() === "")) {
            commentTextArea.classList.add("comments__textarea--error");
            returnFlag = true;
        } else {
            commentTextArea.classList.remove("comments__textarea--error");
        }

        //Control will go back to browser to prevent submit
        if (returnFlag === true) {
            return;
        }

        //Create comment object with new comment
        let newComment = {
            name: "Trupti",// HardCoded       
            comment: comment,
        };

        postComment(newComment); //Passing newComment to Parent HomePage

        form.reset();  // Resetting the form
    };

    return (
        <div className="comments">
            {/* Join the Conversation section : Users to add new comment for selected video */}
            <div className="comments__count-heading">
                {selectedVideoComments?.length} <span> Comments</span>
            </div>
            <div className="comments__title">JOIN THE CONVERSATION</div>

            <div className="comments__container">
                <img className="comments__image"
                    src={CommentImage} alt="MohanMurugeImage" />

                <form className="comments__form" id="comment-form"
                      onSubmit={handleSubmit}
                      onChange={handleChange}> 
                    <textarea className="comments__textarea" name="comment" id="comment"
                        placeholder="Add a new comment">
                    </textarea>

                    <button className="comments__button">COMMENT</button>
                </form>
            </div>

            {/* List down all comments for selected video */}
            <ul className="comments__list">
                {selectedVideoComments?.sort((a, b) => (b.timestamp - a.timestamp))
                    ?.map((commentObject) => {
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
                                        <div>
                                            <img className="comments__delete" 
                                            src={DeleteComment} alt="DeleteComment"
                                            id={commentObject.id} 
                                            onClick={handleDelete}/>
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