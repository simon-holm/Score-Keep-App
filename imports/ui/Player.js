import React from 'react';

import {Players} from './../api/players';

export default class Player extends React.Component {
	render() {
		let player = this.props.player;
		return (
			<div key={player._id} className="item">
				<div className="player">
					<div>
						<h3 className="player__name">{player.name}</h3>
						<p className="player__stats">
						{player.score} point(s).
						</p>
					</div>
					<div className="player__actions">
						<button className="button button--round" onClick={() => Players.update(player._id, {$inc: {score:-1}})}>-1</button>
						<button className="button button--round" onClick={() => Players.update(player._id, {$inc: {score: 1}})}>+1</button>
						<button className="button button--round" onClick={() => Players.remove(player._id)}>X</button>
					</div>
					
				</div>
			</div>
		);
	}
}

Player.PropTypes = {
	player: React.PropTypes.object.isRequired,
}

Player.defaultProps = {
	player: { name: 'You need a player object passed as prop!', score: -999}
}