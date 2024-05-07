import "./PromptPage.scss";
import { useState } from "react";
import EditPost from "../../components/EditPost/EditPost";
import PromptPageTabs from "../../components/PromptPageTabs/PromptPageTabs";
import Navbar from "../../components/Navbar/Navbar";
import MockLinkedInPost from "../../components/MockLinkedInPost/MockLinkedInPost";
import Button from "../../components/Button/Button";
import Modal from 'react-modal';
import linkedinSignIn_small from '../../assets/images/linkedinSignIn_small.png';
import { useLinkedInlogin } from "../../utils/linkedInApi";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SuccessMessageAlert from "../../components/SuccessMessageAlert/SuccessMessageAlert";
import { PopUpModal, PopUpStyle } from "../../components/PopUpModal/PopUpModal";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import rocketAiIcon from "../../assets/images/rocketAiIcon.svg";
import ErrorMessageAlert from "../../components/ErrorMessageAlert/ErrorMessageAlert";
// import ReviewPost from "../../components/ReviewPost/ReviewPost";

const PromptPage = () => {
  const [inputText, setInputText] = useState("");
  const [previewText, setPreviewText] = useState("Preview here");
  const [activeTab, setActiveTab] = useState("edit");
  const [isModalOpen, setModalOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);
  const [isSetLoadSpinner, setLoadSpinner] = useState(null);
  const [linkedinRedirectPage, setLinkedinRedirectPage] = useState("")


  //remove after final 
  // var time = new Date();
  // const prompt = "This is a test Prompt. Posted using LinkedIn API. Date: " + time.toTimeString();
  //remove after final 

  const content = {
    prompts: [inputText],
    responses: [previewText],
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

  const handleClosePostModal = () => {
    setModalOpen(false);
    setErrorMessage(null);
    setsuccessMessage(null);
    setLoadSpinner(null);
  };
  const handleBackToCommitAi = () => {
    handleClosePostModal();
    setActiveTab("edit");
  };

  const handleLinkedinRedirect = () => {
    window.open("https://www.linkedin.com/in/","_blank");
  };

  const { linkedInLogin } = useLinkedInlogin(content, setsuccessMessage, setErrorMessage, setLoadSpinner, setLinkedinRedirectPage);

  const handleSubmitPostClick = () => {
    // handle submission thru LinkedIn here
    setLoadSpinner("loading");
    linkedInLogin();
    // setsuccessMessage("Successfully Posted on Linkedin");
    // setErrorMessage("Error posting to LinkedIn")
    setLoadSpinner(null);

  };
  const linkedinPostModalRender = () => {
    if (isSetLoadSpinner === "loading") {
      return (
        <PopUpModal
          title={{}}>
          <div className="promptpage__spinner">
            <LoadingSpinner />
          </div>
        </PopUpModal>

      )
    } else if (successMessage === null && errorMessage === null && isSetLoadSpinner === null) {
      return (
        <PopUpModal
          title={{ icon: rocketAiIcon, title: "Sign In to post with CommitAi" }}
          closeButtonAction={handleClosePostModal}
          closeButtonName={"Cancel"}
        >
          <Button className="promptpage__signin-linkedin-btn" onClick={handleSubmitPostClick}>
            <img src={linkedinSignIn_small} />
          </Button>
          {errorMessage && errorMessage}
        </PopUpModal>
      )
    } else if (successMessage !== null) {
      return (
        <PopUpModal
          title={{ title: "Your post has been created!" }}
          closeButtonName="Back to CommitAi"
          closeButtonAction={handleBackToCommitAi}
        >
          <SuccessMessageAlert
            message={successMessage}
            redirectPage={handleClosePostModal}
          >
          </SuccessMessageAlert>
          <Button className="successMessage__linkedin-btn" onClick={handleLinkedinRedirect}>
            Go to Linkedin
          </Button>
        </PopUpModal>
      )
    } else if (errorMessage !== null) {
      return (
        <PopUpModal
          title={{ title: "Your post has not been created!" }}
          closeButtonName="Close"
          closeButtonAction={handleClosePostModal}
        >
          <ErrorMessageAlert
            message={errorMessage}>
          </ErrorMessageAlert>

        </PopUpModal>
      )
    }
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
              id="promptpage__linkedinpost-modal"
              isOpen={isModalOpen}
              onRequestClose={handleClosePostModal}
              // onAfterOpen={linkedinPostModalRender}
              ariaHideApp={false}
              // style={PopUpStyle}
              className="modalStyle"
              overlayClassName="modalOverlay"
            >
              <>
                {linkedinPostModalRender()}
                {/* <PopUpModal
                      title={{icon: <HiOutlineRocketLaunch></HiOutlineRocketLaunch>, title:"Sign in to post with Commit AI"}}
                      closeButtonAction={handleClosePostModal}
                      closeButtonName={"Cancel"}
                      >
                      <Button className="promptpage__signin-linkedin-btn" onClick={handleSubmitPostClick}>
                        <img src={linkedinSignIn_small}/>
                      </Button>
                </PopUpModal> */}
                {/* {isSetLoadSpinner ? (
                    <PopUpModal
                      title={{icon: <HiOutlineRocketLaunch></HiOutlineRocketLaunch>, title:"Sign in to post with Commit AI"}}
                      closeButtonAction={handleClosePostModal}
                      closeButtonName={"Cancel"}
                      >
                      <Button className="promptpage__signin-linkedin-btn" onClick={handleSubmitPostClick}>
                        <img src={linkedinSignIn_small}/>
                      </Button>
                    </PopUpModal>
                    
                    ):(
                      successMessage ? (
                        <PopUpModal
                          title={{title:"Your post has been created!"}}
                          closeButtonName="Close"
                          closeButtonAction={handleClosePostModal}
                          >
                          <SuccessMessageAlert 
                            message={successMessage}
                            redirectPage={handleClosePostModal}
                            >
                          </SuccessMessageAlert>
                          <Button className="successMessage__linkedin-btn" onClick={handleLinkedinRedirect}>
                            Go to Linkedin
                          </Button>
                        </PopUpModal>
                        
                      ):(
                        <LoadingSpinner></LoadingSpinner>
                      ) 
                      
                  )} */}
              </>

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

