import queryString from 'query-string';
import axios from 'axios';
import { AuthClient, RestliClient } from 'linkedin-api-client';
import { useEffect } from 'react';


export async function getAccessTokenData(authCode){
    // console.log("getaccesstoken:" ,authCode);
    let accessTokenData = '';
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

    // console.log("client_id:", process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    //     "client_secret: ", process.env.REACT_APP_LINKEDIN_CLIENT_SECRET,)
    // console.log("query", queryParams);
    
    try{
        const responseData = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', queryParams, {
            headers: headers,
        });
        console.log(responseData);
        return responseData;
    }catch(error){
        return error.message;
    }
    

}
