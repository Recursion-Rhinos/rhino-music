import { combineReducers } from 'redux';
import 	SearchReducer from './reducer_search';
import PlaySongs from './reducer_songs';
import  NewsSearch from './news_search';
import EventsSearch from './events_search';
import YoutubeSearch from './youtube_search';
import PlaylistSearch from './playlists';
import PlayVideos from './reducer_videos';
import PlaylistSongs from './playlistSongs';
import AllEvents from './all_events';

const rootReducer = combineReducers({
  tracks: SearchReducer,
  playSong: PlaySongs,
  news: NewsSearch,
  events: EventsSearch,
  playVideo: PlayVideos,
  videos: YoutubeSearch,
  playlists: PlaylistSearch, 
  playlistSongs: PlaylistSongs,
  allEvents: AllEvents
});

console.log("tracks", SearchReducer);
console.log("playSongs", PlaySongs);
console.log('news', NewsSearch);
console.log('playlists', PlaylistSearch);
console.log('playlistSongs', PlaylistSongs);
console.log("allEvents", AllEvents);

export default rootReducer;