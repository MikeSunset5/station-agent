import React from "react";

function TrainBar ({trains, setTrains, tweets, visibleTweets, setVisibleTweets, filteredTweets  }) {
    const trainButtons = trains.map((train) => {
        const trainName = train === visibleTweets ? "selected" : null;
        const regexFilter = tweets.filter(msg => RegExp(`${train.train_name} trains`).exec(msg.text) !== null );

        return (
            <button
            key = {train.id}
            className = {trainName}
            onClick={() => setVisibleTweets(regexFilter)}
            >
                {train.train_name} Train
            </button>
        );
    });
    return (
        <div id='trainbar'>
            <button onClick={() => setVisibleTweets(tweets)}>Home</button>
            {trainButtons}
        </div>
    )
    }
export default TrainBar;