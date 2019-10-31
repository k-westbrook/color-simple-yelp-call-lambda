const axios = require('axios');

exports.handler = async (event) => {

  let searchParameters = event.search;

  let headers = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  }
  let results, data;
  try {
    results = await axios.get(`https://api.yelp.com/v3/businesses/search?location=Seattle&category=restaurant&term=${searchParameters}&limit=5`, headers);
    data = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: {

        message: JSON.stringify('Successful get.'),
        eventSearchResults: results.data.businesses
      }

    };
  } catch (err) {
    return err;
  }
  return data;
};
