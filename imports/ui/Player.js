import React from 'react';

import {Players} from './../api/players';

export default class Player extends React.Component {
	render() {
		let player = this.props.player;
		return (
			<p key={player._id}>
				{player.name} has {player.score} point(s).
				<button onClick={() => Players.update(player._id, {$inc: {score:-1}})}>-1</button>
				<button onClick={() => Players.update(player._id, {$inc: {score: 1}})}>+1</button>
				<button onClick={() => Players.remove(player._id)}>X</button>
			</p>
		);
	}
}

Player.PropTypes = {
	player: React.PropTypes.object.isRequired,
}

Player.defaultProps = {
	player: { name: 'You need a player object passed as prop!', score: -999}
}