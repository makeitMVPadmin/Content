import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import { getResponseContent } from "../../utils/openAIcall";
import PromptHeader from "../PromptHeader/PromptHeader";
import ReviewPost from "../ReviewPost/ReviewPost";

const requestObj = {
  messages: [
    {
      role: "system",
      content:
        "You are a friendly assistant, that gives responses to a community organizer appropriate to LinkedIn in JSON format just post content between 200 and 2000 characters in length, no title. The key should be 'content'. Don't include any extra text outside of the post content itself, including hashtags. Don't say you will create the post, just give me the content",
    },
    {
      role: "user",
      content: "",
    },
  ],
  model: "gpt-3.5-turbo",
  temperature: 0.02,
};

const EditPost = ({
  inputText,
  handleInputChange,
  setPreviewText,
  setActivePage,
  previewText
}) => {
  const getOpenAIResponse = async () => {
    setPreviewText("Loading...");

    requestObj.messages[1].content = inputText;

    try {
      const responseContent = await getResponseContent(requestObj);

      // need to parse JSON to return an object we can work with
      const parsedContent = JSON.parse(responseContent.content);

      // // If responseContent has no content, setAiResponseContent to error message
      setPreviewText(
        parsedContent.content
          ? parsedContent.content
          : `Error: ${responseContent}`
      );
    } catch (error) {
      setPreviewText("An error occured. Please try again.");
    }
  };

  const handleGenerateButtonClick = () => {
    if (inputText) {
      getOpenAIResponse();
      // setActivePage("review");
    } else {
      alert("Please add input!");
    }
  };

  const handlePostClick = () => {
    setActivePage("review");
  }

  return (
    <div className="promptpage__input-container">
      <PromptHeader headerText={"CommitAI Content Generator"} />
      <div className="promptpage__sub-container">
        <h4>Mood</h4>
        <select>
          <option>Tone1</option>
          <option>Tone2</option>
          <option>Tone3</option>
        </select>
        <h4>What do you want to share?</h4>
        <InputBox
          value={inputText}
          onChange={handleInputChange}
          placeholder="Help me write a professional sounding post about my upcoming community event."
          className="promptpage__input-box"
          labelVal="Give AI specific instructions for your content"
        />
        <h4>Output size</h4>
        {/* this will need to be within form, along with everything else */}
        <div className="promptpage__choice-selection">
          <input type="radio" id="small" name="output-size" value="small"></input>
          <label htmlFor="small">Small</label><br></br>
          <input type="radio" id="med" name="output-size" value="med"></input>
          <label htmlFor="med">Medium</label><br></br>
          <input type="radio" id="large" name="output-size" value="large"></input>
          <label htmlFor="large">Large</label><br></br>
        </div>
      </div>
      <Button className="promptpage__generate-btn" onClick={handleGenerateButtonClick}>
        Generate Social Post
      </Button>
      <PromptHeader headerText={"Content"} />
      <div className="promptpage__sub-container">
        <ReviewPost
          previewText={previewText}
          setPreviewText={setPreviewText}
        // setActivePage={setActiveTab}
        />
      </div>
      <PromptHeader headerText={"Publishing Options"} />
      <div className="promptpage__choice-selection">
        <Button className="promptpage__generate-btn">
          Save Draft
        </Button>
        {/* will need to make this button disabled if no content in preview */}
        <Button className="promptpage__post-btn" onClick={handlePostClick}>
          Preview Post
        </Button>
      </div>
    </div>
  );
};

export default EditPost;
