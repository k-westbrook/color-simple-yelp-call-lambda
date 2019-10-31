const axios = require('axios');

exports.handler = async (event) => {

  let searchParameters = event.search;

  let headers = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  }
  let results;
  try {
    results = await axios.get(`https://api.yelp.com/v3/businesses/search?location=Seattle&category=restaurant&term=${searchParameters}&limit=5`, headers);
  } catch (err) {
    return err;
  }
  return results.data.businesses;
};
