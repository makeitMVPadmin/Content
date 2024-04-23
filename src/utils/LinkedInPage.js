import React, { useEffect } from "react";
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
  // const [accessToken, setAccessToken] = React.useState("");


  if (code){
    const getAccessToken = async () => {
      try {
        const accessTokenData = await getAccessTokenData(code);
        console.log("accessTokenData: ", accessTokenData);
        // setAccessToken(accessTokenData.accessToken);
      }catch (error) {
        console.error("Error fetching access token:", error);
      }
    }
    getAccessToken();
  }


  return (
    <div>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      />

      {/* {!code && <div>No code</div>} */}
      {/* {code && ( */}
        {/* <div>
          <div>Authenticated: Authorization Code: {code}</div>
          <div>
            Follow{" "}
            <a
              target="_blank"
              href="https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fconsumer%2Fcontext&tabs=HTTPS#step-3-exchange-authorization-code-for-an-access-token"
              rel="noreferrer"
            >
              this
            </a>{" "}
            to continue
          </div>
          <div>
            UserName = {userName}
          </div>
        </div> */}
      {/* )} */}
      {/* {!accessToken && <div>No accessToken</div>} */}
      {/* {accessToken && <div>Access token: {accessToken}</div>} */}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}


export default LinkedInPage;
