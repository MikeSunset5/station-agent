import React from "react";
import TweetCard from "./TweetCard";

 function Home({tweets}) {
    
    

      return (
          <div className="tweet-field">
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

export default Home