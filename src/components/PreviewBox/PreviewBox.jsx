import Button from "../Button/Button";

const PreviewBox = ({ className, previewText, onClickEdit }) => {
  return (
    // <div className={`preview ${className}`}>
    <div className="promptpage__preview-box">
      <p>{previewText}</p>
      <Button className="edit" onClick={onClickEdit}>
        Edit
      </Button>
    </div>
  );
};

export default PreviewBox;
