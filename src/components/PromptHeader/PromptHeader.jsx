import "./PromptHeader.scss";

const PromptHeader = ({ headerText, icon }) => {

  return (
    <div className="prompt-header">
      <img src={icon} alt="header-icon"></img>
      <h3>{headerText}</h3>
    </div>)
}

export default PromptHeader;