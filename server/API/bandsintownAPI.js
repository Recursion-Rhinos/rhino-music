const request = require('request');
const apiKey = process.env.API_KEY_NYT;

formatUrl = (artist, city, state) => {
   let location = city.replace(/\s+/g, '%20')+","+state;
   console.log(location)
  `http://api.bandsintown.com/artists/${artist}/events/search.json?api_version=2.0&app_id=rhino_music&location=${location}&radius=25`
};

eventSearch = () => {
  request({url: formatUrl("Billy Joel","New York","NY")}, (error, res, body) => {
  	console.log("RES", res, "BODY", body)
    if (!error && res.statusCode === 200) {
      // callback(body);
    } else {
      // callback({ error: 'Error'});
    }
  });	
};

results = () => {

}



module.exports = {
  eventSearch: eventSearch,
  results: results
};