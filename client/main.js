import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {score: -1}}).fetch();
		let playerPositions = calculatePlayerPositions(players);
        let title = 'Score Keep';
		let subtitle = 'Created by Simon Holm';
        ReactDOM.render(<App title={title} subtitle={subtitle} players={playerPositions}/>, document.getElementById('app'));
    });
});
