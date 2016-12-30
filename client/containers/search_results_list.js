import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {
  renderAlbums(albumId) {
  	console.log('albumId', albumId)
    return (
      <tr>
        <td>{albumId.name}</td>
      </tr>
   );
  }


  render () {
  console.log("PROPSInIN", this.props)	
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th> Title</th>
          <th> Artist </th>
          <th> Album </th>
        </tr>
      </thead>
      <tbody>
       {this.props.tracks.map(this.renderAlbums)}  
       { console.log("this.props", this.props)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps(state) {
	console.log('Search_results_List: Tracks', state)
  return { tracks: state.tracks};  //same as tracks: state.tracks
}

export default connect(mapStateToProps)(SearchList);