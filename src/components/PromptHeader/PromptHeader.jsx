import "./PromptHeader.scss";

const PromptHeader = ({ headerText, icon }) => {

  return (
    <div className="prompt-header">
      <img src={icon} alt="header-icon"></img>
      <h5>{headerText}</h5>
    </div>)
}

export default PromptHeader;