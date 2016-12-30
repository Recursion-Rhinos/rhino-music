import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {
  renderAlbums(albumId) {
  	// console.log('albumId', albumId);
    const name = albumId.name;
    return (
      <tr>
        <td>{albumId[0].name}</td>
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
       { console.log("this.props", this.props)}
       {this.props.tracks.map(this.renderAlbums)}
      </tbody>
    </table>
    );
  }
}

function mapStateToProps(state) {
  return {tracks: state.tracks};  //same as tracks: state.tracks
}

export default connect(mapStateToProps)(SearchList);