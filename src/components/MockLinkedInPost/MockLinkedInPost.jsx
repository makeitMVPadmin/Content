import "./MockLinkedInPost.scss";
import {
  FaUserCircle,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaPaperPlane,
} from "react-icons/fa";

const MockLinkedInPost = ({ previewText }) => {
  return (
    <div id="post">
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
        <div className="interaction">
          <FaThumbsUp color="dodgerblue" /> 100
        </div>
        <div className="interaction">20 comments</div>
      </div>
      <div className="post-actions">
        <div className="action">
          <FaThumbsUp size="20" />
          <span>Like</span>
        </div>
        <div className="action">
          <FaComment size="20" />
          <span>Comment</span>
        </div>
        <div className="action">
          <FaShare size="20" />
          <span>Repost</span>
        </div>
        <div className="action">
          <FaPaperPlane size="20" /> <span>Send</span>
        </div>
      </div>
    </div>
  );
};

export default MockLinkedInPost;