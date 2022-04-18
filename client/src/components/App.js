
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import TrainBar from "./TrainBar";
import Home from "./Home";
import RegexHub from "./RegexHub";
import OneTrain from "./trains/1_Train";
import TwoTrain from "./trains/2_Train";
import ThreeTrain from "./trains/3_Train";
import FourTrain from "./trains/4_Train";
import FiveTrain from "./trains/5_Train";
import SixTrain from "./trains/6_Train";
import SevenTrain from "./trains/7_Train";
import A_Train from "./trains/A_Train";
import B_Train from "./trains/B_Train";
import C_Train from "./trains/C_Train";
import D_Train from "./trains/D_Train";
import E_Train from "./trains/E_Train";
import F_Train from "./trains/F_Train";
import G_Train from "./trains/G_Train";
import J_Train from "./trains/J_Train";
import L_Train from "./trains/L_Train";
import M_Train from "./trains/M_Train";
import N_Train from "./trains/N_Train";
import Q_Train from "./trains/Q_Train";
import R_Train from "./trains/R_Train";
import W_Train from "./trains/W_Train";
import Z_Train from "./trains/Z_Train";

function App() {

  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);

 
//fectchs tweets as an object
  useEffect(() => {
    fetch("/twitter")
    .then((r) => r.json())
    .then((rjson) => {
      setTweets(rjson.data)
    });
  }, []);

// converts tweets object into an array
const tweetArry = Object.values(tweets) 

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  // Regex Hub
    //create new arrays
    //have regex parse through each tweet in inital array
    //Depending on which characters match pass that tweet into a corresponding arry
    //ie if A is found pass into ATrainTweets array and then send that array to the
    //corresponsing component for display

  function regexOneTrain() {
    const regex1 = /[A-GJLMNQRWZ1-7].(?=trains|service|express)/g;
  }

  function regexTwoTrain() {
    const regex2 = /[A-GJLMNQRWZ1-7].(?=trains|service|express)/g;
    // Parse through {tweetArry}
    // if there's a 2 in a tweet put that tweet into {twoArry}
    // pass {twoArry} to TwoTrain
  }



  return (
     <BrowserRouter>
      <div className="App">
        <Login user={user} onLogin={setUser}/>
        <TrainBar/>
        <Switch>
          <Route exact path="/">
            <Home tweets={tweetArry}/>
          </Route>
          
          <Route path="/trains/1_train">
            <OneTrain tweets={tweetArry} />
          </Route>
         
          <Route path="/trains/2_Train" >
            <TwoTrain tweets={tweetArry}/>
          </Route>
          
          <Route path="/trains/3_Train">
            <ThreeTrain/>
          </Route>

          <Route path="/trains/4_Train">
            <FourTrain/>
          </Route>

          <Route path="/trains/5_Train">
            <FiveTrain/>
          </Route>

          <Route path="/trains/6_Train">
            <SixTrain/>
          </Route>

          <Route path="/trains/7_Train">
            <SevenTrain/>
          </Route>

          <Route path="/trains/A_Train">
            <A_Train/>
          </Route>

          <Route path="/trains/B_Train">
            <B_Train/>
          </Route>

          <Route path="/trains/C_Train">
            <C_Train/>
          </Route>

          <Route path="/trains/D_Train">
            <D_Train/>
          </Route>

          <Route path="/trains/E_Train">
            <E_Train/>
          </Route>

          <Route path="/trains/F_Train">
            <F_Train/>
          </Route>
          
          <Route path="/trains/G_Train">
            <G_Train/>
          </Route>

          <Route path="/trains/J_Train">
            <J_Train/>
          </Route>

          <Route path="/trains/L_Train">
            <L_Train/>
          </Route>

          <Route path="/trains/M_Train">
            <M_Train/>
          </Route>

          <Route path="/trains/N_Train">
            <N_Train/>
          </Route>

          <Route path="/trains/Q_Train">
            <Q_Train/>
          </Route>

          <Route path="/trains/R_Train">
            <R_Train/>
          </Route>

          <Route path="/trains/W_Train">
            <W_Train/>
          </Route>

          <Route path="/trains/Z_Train">
            <Z_Train/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
