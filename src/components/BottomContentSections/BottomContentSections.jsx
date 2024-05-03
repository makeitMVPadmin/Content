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
        <ReviewPost
          previewText={previewText}
          setPreviewText={setPreviewText}
        />
      </div>
      <PromptHeader headerText={"Publishing Options"} />
      <div className="promptpage__sub-container">
        {/* <Button className="promptpage__generate-btn">
  Save Draft
</Button> */}
        <Button className="promptpage__post-btn" onClick={handlePostClick}>
          Preview Post
        </Button>
      </div>
    </div>
  )
}

export default BottomContentSections;