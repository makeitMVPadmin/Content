import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import PreviewBox from "../PreviewBox/PreviewBox";
import "./ReviewPost.scss";

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
      <>
        <PreviewBox
          previewText={previewText}
          className="promptpage__preview-box"
          onClickEdit={handleToggleEditing}
        />
      </>

    );
  };

  const editAndWordCount = () => {
    return (
      <div className="edit-btn-area">
        <p className="word-count">{previewText.split(" ").length} / 2500</p>

        {!isEditing ?
          <p className="edit" onClick={handleToggleEditing}>
            Edit
          </p> :
          null}


      </div>
    )
  }


  return (
    <>
      <div className="promptpage__container">
        {previewContent()}
      </div>
      {editAndWordCount()}
    </>
  );
};

export default ReviewPost;