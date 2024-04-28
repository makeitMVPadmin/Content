import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import PreviewBox from "../PreviewBox/PreviewBox";
import Button from "../Button/Button";
import MockLinkedInPost from "../MockLinkedInPost/MockLinkedInPost";

const ReviewPost = ({ previewText, setPreviewText, setActivePage }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleBackClick = () => {
    setActivePage("edit");
  };

  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const previewContent = () => {
    return isEditing ? (
      <InputBox
        value={previewText}
        onChange={(e) => setPreviewText(e.target.value)}
        className="promptpage__preview-box"
      />
    ) : (
      <PreviewBox
        previewText={previewText}
        className="promptpage__preview-box"
        onClickEdit={handleToggleEditing}
      />
    );
  };

  // placeholder to handle LinkedIn posting
  const handlePostButtonClick = () => {};

  return (
    <div className="promptpage__preview-container">
      <button onClick={handleBackClick}>Back</button>
      <MockLinkedInPost previewText={previewText}>
        {previewContent()}
      </MockLinkedInPost>

      <Button className="post" onClick={handlePostButtonClick}>
        Post
      </Button>
    </div>
  );
};

export default ReviewPost;
