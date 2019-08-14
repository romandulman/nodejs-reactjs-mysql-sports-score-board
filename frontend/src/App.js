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