import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import { getResponseContent } from "../../utils/openAIcall";
import PromptHeader from "../PromptHeader/PromptHeader";
import ReviewPost from "../ReviewPost/ReviewPost";
import { useState } from 'react';

const EditPost = ({
  inputText,
  handleInputChange,
  setPreviewText,
  setActivePage,
  previewText
}) => {

  const [moodVal, setMoodVal] = useState("professional");
  const [tempVal, setTempVal] = useState(0.02);

  const requestObj = {
    messages: [
      {
        role: "system",
        content:
          `You are a friendly assistant, that gives responses to a community organizer appropriate to LinkedIn in JSON format just post content between 200 and 2000 characters in length, no title. The key should be 'content'. Don't include any extra text outside of the post content itself, including hashtags. Don't say you will create the post, just give me the content. Please make the overall tone of your response ${moodVal} in nature.`,
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
    } else {
      alert("Please add input!");
    }
  };

  const handlePostClick = () => {
    setActivePage("review");
  }

  const handleMoodSelect = (e) => {
    setMoodVal(e.target.value.toLowerCase());
    if (e.target.value === "Silly") {
      //above 1.0 is unreliable, despite technically being possible up to 2.0
      setTempVal(1.0);
    } else {
      setTempVal(0.02);
    }
  }

  return (
    <div className="promptpage__input-container">
      <PromptHeader headerText={"CommitAI Content Generator"} />
      <div className="promptpage__sub-container">
        <div className="promptpage__mood-box">
          <h4>I would like to write a(n) </h4>
          <select onChange={handleMoodSelect}>
            <option>Professional</option>
            <option>Silly</option>
            <option>Humorous</option>
          </select>
          <h4> post in a </h4>
          <select onChange={handleMoodSelect}>
            <option>Professional</option>
            <option>Silly</option>
            <option>Humorous</option>
          </select>
          <h4>tone</h4>
        </div>
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
