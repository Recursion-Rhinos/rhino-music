const request = require('request');
const apiKey = process.env.API_KEY_NYT;

formatUrl = (q) => {
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' 
  + apiKey + '&q=' + q; 
};

search = (q, callback) => {
  request({url: formatUrl(q)}, (error, res, body) => {
    if (!error && res.statusCode === 200) {
      callback(body);
    } else {
      callback({ error: 'Error'});
    }
  });	
};

results = (body) => {
  return body.response.docs.map((data) => {

    return {
      weburl: data.web_url,
      multimedia: data.multimedia[0].url,
      headline: data.headline.main,
    };
  });
};


// NYTIME URL https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=APIKEY&q=New York
module.exports = {
  search: search,
  results: results
};