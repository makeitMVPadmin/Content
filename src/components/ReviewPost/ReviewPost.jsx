import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import PreviewBox from "../PreviewBox/PreviewBox";

const ReviewPost = ({ previewText, setPreviewText, setActivePage }) => {
  const [isEditing, setIsEditing] = useState(false);


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


  return (
    <div className="promptpage__preview-container">
      {previewContent()}
    </div>
  );
};

export default ReviewPost;