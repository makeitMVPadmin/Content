import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import PreviewBox from "../PreviewBox/PreviewBox";
import Button from "../Button/Button";
import { useLinkedInlogin } from "../../utils/linkedInApi";  
import MockLinkedInPost from "../MockLinkedInPost/MockLinkedInPost";


const ReviewPost = ({ inputText, previewText, setPreviewText, setActivePage }) => {
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


  const content = {
    prompts: [inputText],
    responses: [previewText],
  };

  const { linkedInLogin, errorMessage } = useLinkedInlogin(content);

  return (
    <div className="promptpage__preview-container">
      <button onClick={handleBackClick}>Back</button>
      <MockLinkedInPost previewText={previewText}>
        {previewContent()}
      </MockLinkedInPost>

      <Button className="post" onClick={linkedInLogin}>
        Post
      </Button>
    </div>
  );
};

export default ReviewPost;
