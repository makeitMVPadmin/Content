import {useLinkedInlogin } from "./LinkedInUtils";  

const LinkedInPage = () =>{

  const {linkedInLogin, errorMessage} = useLinkedInlogin();

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
