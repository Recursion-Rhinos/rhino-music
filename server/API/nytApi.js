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

 
result = (body) => {

};



// NYTIME URL https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=af60270881bb4977ad34da8640335d97&q=New York
module.exports = {
  search: search
};