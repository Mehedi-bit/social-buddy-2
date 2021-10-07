import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetailsComment from "./components/PostDetailsComment/PostDetailsComment";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">Home2</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>              
            </Route>
            <Route path="/posts/:keyId">
              <PostDetailsComment></PostDetailsComment>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
