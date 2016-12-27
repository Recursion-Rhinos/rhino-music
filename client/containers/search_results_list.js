import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {
	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
					<th> Title</th>
					<th> Artist </th>
					<th> Album </th>
					<th> {this.props.song}</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ song }) {
	console.log("SONG", {song});

	return { song };  //same as song: state.song
}

export default connect (mapStateToProps)(SearchList);