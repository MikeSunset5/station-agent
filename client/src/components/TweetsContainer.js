import React from "react";
import TweetCard from "./TweetCard";

 function TweetsContainer({visibleTweets}) {
 
 const tweetMap = visibleTweets.length === 0 
  ? <h2>Everything looks good! But no promises. It is the MTA after all 😅 </h2>
  : visibleTweets.map((visibleTweet) => (
      <TweetCard 
        key={visibleTweet}
        tweet={visibleTweet} 
        />
    ));

      return (
          <div className="tweet-field">
            <ul className="tweet-card">
              {tweetMap}
            </ul>
           </div>
      )
} 

export default TweetsContainer