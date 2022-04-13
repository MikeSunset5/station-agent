
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import TrainBar from "./TrainBar";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([])

/*   useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);  */

  useEffect(() => {
    fetch("/twitter")
    .then((r) => r.json())
    .then((data) => setTweets(data));
  }, []);
console.log(tweets)
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
    

    <BrowserRouter>
      <div className="App">
        <Login user={user} onLogin={setUser}/>
        
        <Switch>
          <Route exact path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/">
            <h1>Page Count: {count}</h1>
            <Home tweets={tweets}/>
          </Route>
          <TrainBar />
          
         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
