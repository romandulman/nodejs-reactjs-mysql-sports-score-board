import React, {Component} from 'react';
import Header from "./components/Header";
import Football from "./components/Football";
import Basketball from "./components/Basketball";

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from "react-router-dom";

class App extends Component {

  render() {
    return (
        <div className="App">
            <Router>
                <Header/>

              <Route path="/" component={ Basketball } />
                <Route path="/" component={ Football } />
            </Router>

        </div>
    )
  };
}

export default App;