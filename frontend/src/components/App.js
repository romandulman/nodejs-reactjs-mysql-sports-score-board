import React, {Component} from 'react';
import Navbar from "./Navbar";
import Football from "./Football";
import Basketball from "./Basketball";

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

class App extends Component {

  render() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Route path="/">
                    <Redirect to="/basketball" />
                </Route>
                <Route path="/basketball" component={Basketball} />
                <Route path="/football" component={Football} />
            </Router>

        </div>
    )
  };
}

export default App;
