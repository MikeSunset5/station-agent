import React from "react";

function TweetCard({tweet}) {
    return (
        <li key={tweet.id} className ="cards">
            <h4>@NYCT Subway</h4>
            <p>{tweet.text}</p>
            <p>{tweet.created_at}</p>
        </li>
        
    )
}

export default TweetCard;