import React from "react";
import TweetCard from "../TweetCard";

function OneTrain ({tweets}) {
return(
    <div className="tweet-field">
        <h3>1 Train</h3>
    <ul className="tweet-card">
        {tweets.map((tweet) => {
            return (
              <TweetCard 
                key={tweet}
                tweet={tweet} 
                />
            );
        })}
    </ul>
   </div>
)
} 


export default OneTrain;