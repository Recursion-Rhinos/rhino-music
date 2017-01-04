import { combineReducers } from 'redux';
import 	SearchReducer from './reducer_search';
import PlaySongs from './reducer_songs';
import  NewsSearch from './news_search';
import EventsSearch from './events_search';
import YoutubeSearch from './youtube_search';
import PlayVideos from './reducer_videos';

const rootReducer = combineReducers({
  tracks: SearchReducer,
  playSong: PlaySongs,
  news: NewsSearch,
  events: EventsSearch,
  playVideo: PlayVideos,
  videos: YoutubeSearch
});

console.log("tracks", SearchReducer);
console.log("playSongs", PlaySongs);
console.log('news', NewsSearch);

export default rootReducer;