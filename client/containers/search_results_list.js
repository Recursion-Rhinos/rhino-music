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
					<th> {this.props.tracks}</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ tracks }) {
	console.log("SONG", {tracks});

	return { tracks };  //same as song: state.song
}

export default connect(mapStateToProps)(SearchList);