const PromptPageTabs = ({ activeTab }) => {
  const classes = (tab) => (tab === activeTab ? "__active" : "");

  return (
    <div className="promptpage__navbar">
      <p className={`promptpage__navbar-item${classes("edit")}`}>Edit Post</p>
      <p className={`promptpage__navbar-item${classes("review")}`}>
        Review Post
      </p>
    </div>
  );
};

export default PromptPageTabs;
