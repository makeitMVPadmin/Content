import queryString from 'query-string';
import axios from 'axios';


// axios function format : 
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
        const responseData = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', 
            queryParams, 
            {
                headers: headers,
            });
        console.log("access token: ",responseData.data);
        let memberDetails = await getMemberDetails(responseData.data.access_token);

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
        const memberDetails = await axios.get('https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/userinfo',
            {
                headers: headers,
            });
        var content = "This is a test 1423. Postesd using LinkedIn API";
        
        if(memberDetails){
            console.log("memberdetails:", memberDetails.data.sub);
            let postContent = await postContentToLinkedIn(accessToken, memberDetails, content);
            console.log("postcontent: ", postContent);
        }
        return memberDetails;
    }catch(error){
        return error.message;
    }
}


//  function that takes in access token, content and posts content to the linkedin
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
              "text":`${content}`
            },
            "shareMediaCategory": "NONE"
          }
        },
        "visibility": {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
      };

    try{
        const postContent = await axios.post('https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/ugcPosts', data,
            {
                headers:headers,
            });
            console.log("postcontent:",postContent);
        return postContent;
    }catch(error){
        return error.message;
    }

    
}