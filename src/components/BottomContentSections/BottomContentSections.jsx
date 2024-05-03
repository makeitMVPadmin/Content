import PromptHeader from "../PromptHeader/PromptHeader";
import ReviewPost from "../ReviewPost/ReviewPost";
import Button from "../Button/Button";

const BottomContentSections = ({
  previewText,
  setPreviewText,
  handlePostClick
}) => {
  return (
    <div className="promptpage__bottom-section">
      <PromptHeader headerText={"Content"} />
      <div className="promptpage__sub-container">
      <h4>Am I missing any details?</h4>
        <ReviewPost
          previewText={previewText}
          setPreviewText={setPreviewText}
        />
      </div>
      <PromptHeader headerText={"Publishing Options"} />
        <Button
          className="preview"
          onClick={handlePostClick}>
            Preview Post
        </Button>
    </div>
  )
}

export default BottomContentSections;