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
        console.log("access token: ",responseData.data);
        let memberDetails = await getMemberDetails(responseData.data.access_token);
        if (memberDetails){
            console.log(memberDetails);
        }
        // return responseData;
    }catch(error){
        return error.message;
    }
    
}

// function that takes in access token and return the member details
export async function getMemberDetails(accessToken){
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
    }
    console.log(headers);
    
    try{
        const memberDetails = await axios.get('https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/userinfo',{
            headers: headers,
        });
        return memberDetails;
    }catch(error){
        return error.message;
    }
}
