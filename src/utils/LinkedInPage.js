import React from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { getAccessTokenData, getMemberDetails } from "./LinkedInUtils";  

const LinkedInPage = () =>{

  // get the user authorization token from linkedin login
  const{ linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    redirectUri: `${window.location.origin}/linkedin/callback`,
    onSuccess: (authCode) => {
      console.log("AuthCode: ",authCode);
      setAuthCode(authCode);
      setErrorMessage("");
    },
    scope: ["w_member_social","openid","profile","email"],
    onError: (error) => {
      console.log(error);
      // setCode("");
      setErrorMessage(error.errorMessage);
    },
  });


  const [authCode, setAuthCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  let accessTokenData;


  if (authCode){
    // get the user access token from linkedin api
    const getAccessToken = async () => {
      try {
        accessTokenData = await getAccessTokenData(authCode);
        console.log("accessTokenData: ", accessTokenData);
        // if (accessTokenData){
        //   const memberDetails = await getMemberDetails(accessTokenData.data.access_token);
        //   console.log("Member Details: ", memberDetails);
        // }

      }catch (error) {
        console.error("Error fetching access token:", error);
      }
    }
    getAccessToken();
  }

  if(accessTokenData){
    console.log("Accesstoken", accessTokenData);
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
