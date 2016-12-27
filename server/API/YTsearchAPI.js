const request = require('request');
const apiKey = "AIzaSyDuq91IyM4yVkDOCagx_Y_VvRnLyKHXfuE;"


ytSearch = () => {
  request({
    part: "snippet",
    q: "redbone",
    order: "relevance",
    key: apiKey
	},(err, res, body) => {
		console.log("RES", res)
		console.log("body", body)
	});
};
	

module.exports = {
  YTSearch: YTSearch
};