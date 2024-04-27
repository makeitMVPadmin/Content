import { handleLinkedInPostButton, useLinkedInlogin } from "./linkedInApi";  

const LinkedInPage = () =>{

  var time = new Date();
  const promptText = "This is a test promptText. Posted using LinkedIn API. Date: "+time.toTimeString();
  const response = "This is a test Response. Posted using LinkedIn API. Date: "+time.toTimeString();

  const content = {
    prompts: [promptText],
    responses: [response],
  };
  const { linkedInLogin, errorMessage } = useLinkedInlogin(content);


  return (
    <div>
      <button
        onClick={linkedInLogin}
        title="Post"
        style={{cursor: "pointer" }}
      >
        Post
      </button>

      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default LinkedInPage;