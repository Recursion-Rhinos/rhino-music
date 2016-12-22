import React, { Component } from 'react'
// size may also be a plain string using the presets 'large' or 'compact' 
const MusicPlayer = (props) => {
console.log("MUSIC PLAYER PROPS", props)
console.log("PROPS URI", props.songUri)
	return (
	<div>
		<iframe 
			src={`https://embed.spotify.com/?uri=${props.songUri}`}
			width="100%" 
			height="100" 
			frameBorder="0" 
			allowTransparency="true">
		</iframe>
	</div>
	);
};

export default MusicPlayer