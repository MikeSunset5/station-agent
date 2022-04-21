
import { useState, useEffect } from "react";
import Login from './Login';
import TrainBar from "./TrainBar";
import TweetsContainer from "./TweetsContainer";


function App() {

  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [trains, setTrains] = useState([]);
  const [visibleTweets, setVisibleTweets] = useState([]);
/*   const [filteredTweets, setFilteredTweets] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState('All') */

//fectchs tweets as an object
  useEffect(() => {
    fetch("/twitter")
    .then((r) => r.json())
    .then((rjson) => {
     // console.log('init tweetrr', rjson.data) 

      setVisibleTweets(rjson.data)
      setTweets(rjson.data)
    });
  }, []);
  

  useEffect(() => {
    fetch("/train")
    .then((r) => r.json())
    .then((rjson) => {
      setTrains(rjson)
    })
  }, [])
//display tweet array

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
      <div className="App">  
        <Login user={user} onLogin={setUser}/>
        <TrainBar 
          trains={trains}
          setTrain={setTrains}
          tweets={tweets}
          visibletweets={visibleTweets}
          setVisibleTweets={setVisibleTweets}
         // filteredTweets = {filteredTweets}
        />
        <TweetsContainer visibleTweets={visibleTweets} />
      </div>
  
  );
}

export default App;
