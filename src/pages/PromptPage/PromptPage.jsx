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
      <div className="promptpage">
        {activeTab === "edit" && (
          <EditPost
            inputText={inputText}
            handleInputChange={handleInputChange}
            setActivePage={setActiveTab}
            setPreviewText={setPreviewText}
          />
        )}
        {activeTab === "review" && (
          <ReviewPost
            previewText={previewText}
            setPreviewText={setPreviewText}
            setActivePage={setActiveTab}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <PromptPageTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderActiveTab()}
    </>
  );
};

export default PromptPage;
