import "./MockLinkedInPost.scss";
import {
  FaUserCircle,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaPaperPlane,
} from "react-icons/fa";

const MockLinkedInPost = () => {
  // this component will be added to ReviewTab & wrapped around the previewText box
  // placeholder text
  const previewText =
    "Post text here. There will be post text here. post text here post text here. A post will be here. Post text here A post goes here. Post text here post text here post text here. There will be post text here ";

  return (
    <div className="post-container">
      <div className="author">
        <FaUserCircle size="50" color="lightgray" />
        <div className="author-info">
          <span className="author-name">Your Name Here</span>
          <span className="author-followers">900 Followers</span>
        </div>
      </div>
      <div className="post-text">{previewText}</div>
      <img
        src="https://s3.eu-north-1.amazonaws.com/static.prelive.mediamodifier.com/admockup-static-assets/horizontal.jpg"
        alt="Preview"
        className="post-image"
      />
      <div className="post-interactions">
        <div className="post-interaction">
          <FaThumbsUp color="dodgerblue" /> 100
        </div>
        <div className="post-interaction">20 comments</div>
      </div>
      <div className="post-actions">
        <div className="post-action">
          <FaThumbsUp />
          <span>Like</span>
        </div>
        <div className="post-action">
          <FaComment />
          <span>Comment</span>
        </div>
        <div className="post-action">
          <FaShare />
          <span>Share</span>
        </div>
        <div className="post-action">
          <FaPaperPlane /> <span>Send</span>
        </div>
      </div>
    </div>
  );
};

export default MockLinkedInPost;
