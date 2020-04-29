'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {


  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=devdka9vqbs3orgak8g9s39jg7'
    + '&client_secret=c8ucbpjkjthmtbsoqobeninn89'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://bowlofsunshine.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
