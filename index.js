const axios = require('axios');

exports.handler = (event, context, callback) => {

  let searchParameters = event.search;

  let results = axios.get(`https://api.yelp.com/v3/businesses/search?categories=restaurant?term=${searchParameters}`);

  console.log(results)
};
