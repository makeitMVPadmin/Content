import "./PromptPage.scss";
import { useState } from "react";
import EditPost from "../../components/EditPost/EditPost";
import PromptPageTabs from "../../components/PromptPageTabs/PromptPageTabs";
import Navbar from "../../components/Navbar/Navbar";
import MockLinkedInPost from "../../components/MockLinkedInPost/MockLinkedInPost";
import Button from "../../components/Button/Button";
import Modal from 'react-modal';
import PopUpStyle from "../../components/PopUpModal/PopUpModal";
import linkedinSignIn_small from '../../assets/images/linkedinSignIn_small.png';
import { useLinkedInlogin } from "../../utils/linkedInApi";  

// import ReviewPost from "../../components/ReviewPost/ReviewPost";

const PromptPage = () => {
  const [inputText, setInputText] = useState("");
  const [previewText, setPreviewText] = useState("Preview here");
  const [activeTab, setActiveTab] = useState("edit");
  const [isModalOpen, setModalOpen] = useState(false);
  
  var time = new Date();
  const prompt = "This is a test Prompt. Posted using LinkedIn API. Date: "+time.toTimeString();
  const content = {
    prompts: [inputText],
    responses: [prompt],
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleBackClick = () => {
    setActiveTab("edit");
  };

  const handleOpenPostModal = () => {
    setModalOpen(true);
  };

  const handleClosePostModal = () =>{
    setModalOpen(false);
  };

  const handleSubmitPostClick = () => {
    // handle submission thru LinkedIn here

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
            <button onClick={handleBackClick}>Back</button>
            <MockLinkedInPost previewText={previewText}></MockLinkedInPost>
            <Button className="promptpage__post-btn" onClick={handleOpenPostModal}>
              Post on LinkedIn
            </Button>
          
            <Modal
              id = "promptpage__linkedinpost-modal"
              isOpen={isModalOpen}
              onRequestClose={handleClosePostModal}
              ariaHideApp={false}
              style={PopUpStyle}
              >
                <div>
                  <Button className="promptpage__signin-linkedin-btn">
                    <img src={linkedinSignIn_small}/>
                  </Button> 
              </div>
            </Modal>
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

