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
    
    const responseData = axios.post('https://www.linkedin.com/oauth/v2/accessToken', queryParams, {
        headers: headers,
    })
    .then(function(response){
        if(!response){
            throw new Error(`Failed to fetch access token: ${response.status} ${response.statusText}`);
        }
        accessTokenData = response;
        console.log("access token", accessTokenData.data);
        return accessTokenData;
        
    })
    .catch(function(error){
        console.log("error in linkedin utils:" , error.message);
    });

}
