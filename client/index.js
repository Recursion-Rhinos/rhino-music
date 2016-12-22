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
    	selectedSong: null 
    }
     this.songSearch = this.songSearch.bind(this)
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
