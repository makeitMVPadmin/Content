import "./PromptPage.scss";
import { useState } from "react";
import EditPost from "../../components/EditPost/EditPost";
import PromptPageTabs from "../../components/PromptPageTabs/PromptPageTabs";
import Navbar from "../../components/Navbar/Navbar";

const PromptPage = () => {
  const [inputText, setInputText] = useState("");
  const [previewText, setPreviewText] = useState("Preview here");
  const [activeTab, setActiveTab] = useState("edit");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleBackClick = () => {
    setActiveTab("edit");
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
              previewText={previewText}
            />
          </div>
        )}
        {activeTab === "review" && (
          <div className="promptpage_container">
            <div>Render Eileen's Linked In mock up here</div>
            <button onClick={handleBackClick}>Back</button>
          </div>

        )}
      </>
    );
  };

  return (
    <div className="promptpage-container">
      <div className="promptpage">
        <Navbar />
        <PromptPageTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default PromptPage;
