import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {
    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s)</p>;
    });
};


const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        });
    };
};

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "Score Keep";
        let name = 'Simon';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}!</p>
                <p>A paragraph</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});
