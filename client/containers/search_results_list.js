// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// export default class SearchList extends Component {
// 	renderWeather(songData) {
// 		return (
// 		  <tr key={songData.id}>
// 		   <td>{songData}</td>
// 		  </tr>
// 		)
// 	}

// 	render () {
// 		return (
// 			<table className="table table-hover">
// 				<thead>
// 					<tr>
// 					<th> Title</th>
// 					<th> Artist </th>
// 					<th> Album </th>
// 					<th> Duration </th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{this.props.weather.map(this.renderWeather)}
// 				</tbody>
// 			</table>
// 		)
// 	}
// }

// function mapStateToProps({ song }) {

// 	return { song };  //same as song: state.song
// }

// export default connect (mapStateToProps)(SearchList);