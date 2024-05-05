import queryString from 'query-string';
import axios from 'axios';
import { useState } from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { addMessage } from './firebaseMessages';


// axios function format : 
    // let config = {
    //     method: 'post',
    //     url: 'https:',
    //     queryparams,
    //     headers: { 
    //       'Content-Type': ' application/json', 
    //       'X-Restli-Protocol-Version': ' 2.0.0', 
    //       'Authorization': `Bearer ${accessToken}`, 
    //     },
    //     data : data
    //   };


 // get the user authorization token from linkedin login
 export const useLinkedInlogin = (content) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [isSetLoadSpinner, setLoadSpinner] = useState(true);
    const { linkedInLogin } = useLinkedIn({
        clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirectUri: `${window.location.origin}/linkedin/callback`,
        onSuccess: (authCode) => {
            const accessTokenData = getAccessTokenData(authCode, content);
            setErrorMessage("");
            setsuccessMessage("Successfully Posted on Linkedin");
            setLoadSpinner(false);
        },
        scope: ["w_member_social","openid","profile","email"],
        onError: (error) => {
            setLoadSpinner(false);
            setErrorMessage(error.errorMessage);
        },
    });

    return{linkedInLogin, isSetLoadSpinner, errorMessage, successMessage};
};

// function that takes in Authorization code and returns the access token
export async function getAccessTokenData(authCode, content){
    const queryParams  = queryString.stringify({
        grant_type: 'authorization_code',
        code: authCode,
        client_id: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        client_secret: process.env.REACT_APP_LINKEDIN_CLIENT_SECRET,
        redirect_uri: `${window.location.origin}/linkedin/callback`,
      });

     const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
     }
    
    try{
        const responseData = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', 
            queryParams, 
            {
                headers: headers,
            });
        const memberDetails = await getMemberDetails(responseData.data.access_token, content);
        return memberDetails;
    }catch(error){
        return error.message;
    }
    
}

// function that takes in access token and return the member details
export async function getMemberDetails(accessToken, content){
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
    }
   
    try{
        const memberDetails = await axios.get('https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/userinfo',
            {
                headers: headers,
            });

        // var time = new Date();
        // const content = "This is a test. Posted using LinkedIn API. Date: "+time.toTimeString();
        
        if(memberDetails){
            const postContent = await postContentToLinkedIn(accessToken, memberDetails, content);
        }
        return memberDetails;
    }catch(error){
        return error.message;
    }
}


//  function that takes in access token, memberDetails, content and posts content to the linkedin
export async function postContentToLinkedIn(accessToken, memberDetails, content){
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0', 
    }
    let data = {
        "author": `urn:li:person:${memberDetails.data.sub}`,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
          "com.linkedin.ugc.ShareContent": {
            "shareCommentary": {
              "text":`${content.responses}`
            },
            "shareMediaCategory": "NONE"
          }
        },
        "visibility": {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
      };

    try{
        const postContent = await axios.post('https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/ugcPosts', 
            data,
            {
                headers:headers,
            });

            //if the message is posted to the LinkedIn, add it to the Firebase collection
            var message = {
                platform:"LinkedIn",
                posted:true,
                prompts:content.prompts,
                responses:content.responses,
                userID:"", 
            }
            const id = await addMessage(message);
            return postContent;

    }catch(error){
        return error.message;
    }
}

