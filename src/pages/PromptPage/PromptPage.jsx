import "./PromptPage.scss";
import { useState } from "react";
import EditPost from "../../components/EditPost/EditPost";
import PromptPageTabs from "../../components/PromptPageTabs/PromptPageTabs";
import MockLinkedInPost from "../../components/MockLinkedInPost/MockLinkedInPost";
import Button from "../../components/Button/Button";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import CommitAIBanner from "../../components/CommitAIBanner/CommitAIBanner";
import { Link } from "react-router-dom";

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

  const handleSubmitPostClick = () => {
    // handle submission thru LinkedIn here
  }

  const renderActiveTab = () => {
    return (
      <>
        {activeTab === "edit" && (
          <div className="promptpage__background-container">
            <div className="promptpage__outer-container">
              <div className="promptpage__container">
                <EditPost
                  inputText={inputText}
                  handleInputChange={handleInputChange}
                  setActivePage={setActiveTab}
                  setPreviewText={setPreviewText}
                  previewText={previewText}
                />
              </div>
              <div className="promptpage__exit-area">
                <Link to="/dashboard">
                  <h3>&#60;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exit</h3>
                </Link>
              </div>
            </div>
          </div>
        )}
        {activeTab === "review" && (
          <div className="promptpage_container">
            <button onClick={handleBackClick}>Back</button>
            <MockLinkedInPost previewText={previewText}></MockLinkedInPost>
            <Button className="promptpage__post-btn" onClick={handleSubmitPostClick}>
              Post on LinkedIn
            </Button>
          </div>

        )}
      </>
    );
  };

  return (
    <div className="promptpage-container">
      <div className="promptpage">
        <DashboardNavbar />
        <CommitAIBanner />
        <PromptPageTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default PromptPage;

