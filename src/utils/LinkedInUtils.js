import queryString from 'query-string';
import axios from 'axios';

// function that takes in Authorization code and returns the access token
export async function getAccessTokenData(authCode){
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
        const responseData = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', queryParams, {
            headers: headers,
        });
        return responseData;
    }catch(error){
        return error.message;
    }
    
}

// function that takes in access token and return the member details
export async function getMemberDetails(accessToken){

}

//  function that takes in access token, content and posts content to the linkedin
export async function postContentToLinkedIn(accessToken, content){

}