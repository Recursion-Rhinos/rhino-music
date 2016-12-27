import lodash from 'lodash'
import React, { Component } from 'react'; //find node mod named 'react' and put it into var React
import ReactDOM from 'react-dom';
import axios from 'axios'
// import 'whatwg-fetch';
// import Routes from './routes';
import SearchBar from './components/searchbar'
import SearchResults from './components/search_results'
import MusicPlayer from './components/spotify_player'
// import RecList from './components/rec_list'
// import SongItem from './components/song_item'

class App extends Component {

 constructor(props) {
    super(props);

    this.state = { 
    	songs: [],
    	selectedSong: null,
      image: null
      
    }
     this.songSearch = this.songSearch.bind(this)
     this.newsSearch = this.newsSearch.bind(this)
}

songSearch = (term) => {   
    var that = this;
axios.post('/api/search', { 
            body: term
    }).then(function(results){
      console.log(results)
        console.log("THAT", that)
        that.setState({
            songs: results.data.tracks.items,
            selectedSong: results.data.tracks.items[0].uri
        })
    })
  }

newsSearch = () => {
  let that = this;
  axios.get('/news')
  .then((response) => 
    console.log("responce123", response.data.response.docs[0].multimedia[0].url);
    //Have to fix this part
    that.setState({
    songs: [],
    selectedSong: null,
    image: "nytimes.com/" + response.data.response.docs.[0].multimedia[0].url
  })
  .catch((error) => {
    console.log("ERROR", error)
  })
}

componentDidMount() {
  console.log("TEST");
  return this.newsSearch();
  }

  
render () {
   return <div>
            <SearchBar onSearchTermChange={term => this.songSearch(term)}/>
            <SearchResults onSongSelect={selectedSong => this.setState({ selectedSong:selectedSong})}
             songs={this.state.songs}/>
             <MusicPlayer songUri={this.state.selectedSong}/>

          </div>
 }
}
ReactDOM.render( < App / > , document.querySelector('.container'))
