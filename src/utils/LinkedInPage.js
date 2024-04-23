import React from "react";
import {Button} from "react-dom";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { getAccessTokenData } from "./LinkedInUtils";  
import queryString from 'query-string';

const LinkedInPage = () =>{

  // get the user authorization token from linkedin login
  const{ linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    redirectUri: `${window.location.origin}/linkedin/callback`,
    onSuccess: (code) => {
      console.log("AuthCode: ",code);
      setCode(code);
      setErrorMessage("");
    },
    scope: "w_member_social",
    onError: (error) => {
      console.log(error);
      // setCode("");
      setErrorMessage(error.errorMessage);
    },
  });


  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [userName, setUserName] = React.useState("");
  let accessToken = '';


  if (code){
    const getAccessToken = async () => {
      try {
        const accessTokenData = await getAccessTokenData(code);
        console.log("accessTokenData: ", accessTokenData);
        // setAccessToken(accessTokenData.accessToken);
        accessToken = accessTokenData.accessToken;
      }catch (error) {
        console.error("Error fetching access token:", error);
      }
    }
    getAccessToken();
  }
  if(accessToken !== ''){
    console.log("Accesstoken", accessToken);

  }


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
