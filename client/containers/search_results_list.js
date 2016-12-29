import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {

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
        {this.props.tracks.items.map(this.renderAlbums)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps({ tracks }) {
	console.log('Search_results_List: Tracks', {tracks} )
  return { tracks };  //same as tracks: state.tracks
}

export default connect(mapStateToProps)(SearchList);