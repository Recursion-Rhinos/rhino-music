import { combineReducers } from 'redux';
import 	SearchReducer from './reducer_search';
import PlaySongs from './reducer_songs';
import NewsSearch from './news_search';
import EventsSearch from './events_search';
import YoutubeSearch from './youtube_search';
import PlaylistSearch from './playlists';
import PlayVideos from './reducer_videos';
import PlaylistSongs from './playlistSongs';
import AllEvents from './all_events';
import GetAllPlaylists from './getallplaylists';
import UserSettings from './userSettings';
import Dropdown from './dropdown';
import VideoPlaylist from './videofy';
import PlaylistDropdown from './getPlaylistDropdown';
import ToggleUser from './toggleUser';
import Selected from './reducer_selected';
import GetUser from './reducer_getUser';

const rootReducer = combineReducers({
  tracks: SearchReducer,
  playSong: PlaySongs,
  news: NewsSearch,
  events: EventsSearch,
  playVideo: PlayVideos,
  videos: YoutubeSearch,
  playlists: PlaylistSearch, 
  playlistSongs: PlaylistSongs,
  allEvents: AllEvents,
  getAllPlaylists: GetAllPlaylists,
  userSettings: UserSettings,
  dropdown: Dropdown,
  videoPlaylist: VideoPlaylist,
  PlaylistDropdown: PlaylistDropdown,
  toggleSettings: ToggleUser,
  selected: Selected,
  userInfo: GetUser
});

export default rootReducer;