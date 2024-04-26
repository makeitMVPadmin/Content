import "./PromptPage.scss";
import { useState } from "react";
import EditPost from "../../components/EditPost/EditPost";
import ReviewPost from "../../components/ReviewPost/ReviewPost";
import PromptPageTabs from "../../components/PromptPageTabs/PromptPageTabs";

const PromptPage = () => {
  const [inputText, setInputText] = useState("");
  const [previewText, setPreviewText] = useState("Preview here");
  const [activeTab, setActiveTab] = useState("edit");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const renderActiveTab = () => {
    return (
      <>
        {activeTab === "edit" && (
          <div className="promptpage__container">
            <EditPost
              inputText={inputText}
              handleInputChange={handleInputChange}
              setActivePage={setActiveTab}
              setPreviewText={setPreviewText}
            />
          </div>

        )}
        {activeTab === "review" && (
          <ReviewPost
            previewText={previewText}
            setPreviewText={setPreviewText}
            setActivePage={setActiveTab}
          />
        )}
      </>
    );
  };

  return (
    <div className="promptpage">
      <PromptPageTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderActiveTab()}
    </div>
  );
};

export default PromptPage;
