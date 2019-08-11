import React, {Component} from 'react';
import Header from "./components/Header";
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
                    <Redirect to="/" />
                </Route>
                {/*<Route path="/" component={  } />
                <Route path="/" component={  } />
                <Route path="/" component={  } />
                <Route path="/" component={  } />*/}
            </Router>

        </div>
    )
  };
}

export default App;