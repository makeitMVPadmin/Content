import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import PreviewBox from "../PreviewBox/PreviewBox";
import Button from "../Button/Button";

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
      <div>
        <Button className="edit" onClick={handleToggleEditing}>
          Edit
        </Button>
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