import PromptHeader from "../PromptHeader/PromptHeader";
import ReviewPost from "../ReviewPost/ReviewPost";
import Button from "../Button/Button";
import contentLinesIcon from "../../assets/icons/contentLines.svg";
import clockIcon from "../../assets/icons/clock.svg";

const BottomContentSections = ({
  previewText,
  setPreviewText,
  handlePostClick,
}) => {
  return (
    <div className="promptpage__bottom-section">
      <PromptHeader headerText={"Content"} icon={contentLinesIcon} />
      <div className="promptpage__sub-container">
      <h4>Am I missing any details?</h4>
        <ReviewPost
          previewText={previewText}
          setPreviewText={setPreviewText}
        />
      </div>
      {/* Publish options for future iteration */}
      
      {/* <PromptHeader headerText={"Publishing Options"} icon={clockIcon} /> */}
        {/* <Button
          className="preview"
          onClick={handlePostClick}>
            Next
        </Button> */}
        {/* <div className="promptpage__choice-selection">
            <input type="radio" id="publish_now" name="output-size" value="publish_now"></input>
            <label htmlFor="publish_now">Publish Now</label>
        </div> */}
    </div>
  )
}

export default BottomContentSections;