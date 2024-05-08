import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import { getResponseContent } from "../../utils/openAIcall";
import PromptHeader from "../PromptHeader/PromptHeader";
import { useState } from 'react';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import BottomContentSections from "../BottomContentSections/BottomContentSections";
import rocketIcon from '../../assets/icons/rocket.svg';



const EditPost = ({
  inputText,
  handleInputChange,
  setPreviewText,
  setActivePage,
  previewText
}) => {

  const [toneVal, setToneVal] = useState("professional");
  const [postType, setPostType] = useState("update or achievement")
  const [tempVal, setTempVal] = useState(0.02);
  const [contentMinSize, setContentMinSize] = useState(0);
  const [aiResponseLoading, setAiResponseLoading] = useState(null);

  const requestObj = {
    messages: [
      {
        role: "system",
        content:
          `You are a friendly assistant, that gives responses to a community organizer appropriate for LinkedIn posting in JSON format, just post content between 200 and 2000 characters in length, no title. The key should be 'content'. The type of post should be ${postType}. Don't include any extra text outside of the post content itself, including hashtags. Don't say you will create the post, just give me the content. Please make the overall tone of your response ${toneVal} in nature. Please strive to make your response at least ${contentMinSize} words in length.`,
      },
      {
        role: "user",
        content: "",
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: tempVal,
  };

  const getOpenAIResponse = async () => {
    setPreviewText("Loading...");
    requestObj.messages[1].content = inputText;

    try {
      const responseContent = await getResponseContent(requestObj);

      // need to parse JSON to return an object we can work with
      const parsedContent = JSON.parse(responseContent.content);

      setAiResponseLoading("done")

      // If responseContent has no content, setAiResponseContent to error message
      setPreviewText(
        parsedContent.content
          ? parsedContent.content
          : `Error: ${responseContent}`
      );
    } catch (error) {
      setPreviewText("An error occured. Please try again.");
    }
  };

  const handleSizeSelect = (e) => {
    // is affecting size, but number of words doesn't exactly match
    if (e.target.value === "small") {
      setContentMinSize(10);
    } else if (e.target.value === "med") {
      setContentMinSize(50);
    } else if (e.target.value ==="large") {
      setContentMinSize(100);
    }
  }

  const handleGenerateButtonClick = () => {
    setAiResponseLoading("loading");
    if (inputText) {
      getOpenAIResponse();
    } else {
      alert("Please add input!");
      setAiResponseLoading(null)
    }
  };

  const handlePostClick = () => {
    setActivePage("review");
  }

  const handleMoodSelect = (e) => {
    setToneVal(e.target.value.toLowerCase());
    if (e.target.value === "Witty" || e.target.value === "Casual") {
      //above 1.0 is unreliable, despite technically being possible up to 2.0
      setTempVal(1.0);
    } else {
      setTempVal(0.02);
    }
  }

  const handlePostTypeSelect = (e) => {
    setPostType(e.target.value.toLowerCase());
  }


  const bottomRender = () => {
    if (aiResponseLoading === null) {
      return null;
    } else if (aiResponseLoading === "loading") {
      return (
        <div className="promptpage__spinner">
          <LoadingSpinner />
        </div>
      )
    } else {
      return <BottomContentSections
        previewText={previewText}
        setPreviewText={setPreviewText}
        handlePostClick={handlePostClick}
      />;
    }
  }


  return (
    <div className="promptpage__container">
      <div className="promptpage__input-container">
        <PromptHeader headerText={"CommitAI Content Generator"} icon={rocketIcon}/>
        <div className="promptpage__sub-container">
          <div className="promptpage__mood-box">
            <h3>I would like to write a(n)</h3>
            <select className="promptpage__select" onChange={handlePostTypeSelect}>
              <option>Update or Achievement</option>
              <option>Event Announcement</option>
              <option>Job Opportunity</option>
              <option>Educational Content</option>
              <option>Industry Insight</option>
            </select>
            <h3> post in a</h3>
            <select className="promptpage__select" onChange={handleMoodSelect}>
              <option>Professional</option>
              <option>Witty</option>
              <option>Appreciative</option>
              <option>Casual</option>
              <option>Engaging</option>
              <option>Motivating</option>
            </select>
            <h3>tone</h3>
          </div>
          <InputBox
            value={inputText}
            onChange={handleInputChange}
            placeholder="What is this about?"
            className="promptpage__input-box"
          />
          <h4>Output size</h4>
          {/* this will need to be within form, along with everything else */}
          <div className="promptpage__choice-selection" onChange={handleSizeSelect}>
            <input type="radio" id="small" name="output-size" value="small"></input>
            <label htmlFor="small">Small</label><br></br>
            <input type="radio" id="med" name="output-size" value="med"></input>
            <label htmlFor="med">Medium</label><br></br>
            <input type="radio" id="large" name="output-size" value="large"></input>
            <label htmlFor="large">Large</label><br></br>
          </div>
        </div>
        <Button
          className="generate"
          onClick={handleGenerateButtonClick}>Generate Content
        </Button>

        {bottomRender()}

      </div>
    </div>
  );
};

export default EditPost;
