import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import Resources from "./Resources";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={() => <Header />} />
          {/*<Route
            path="/template"
            component={() => <InputCard userID={this.state.userID} />}
          />*/}
          <Route path="/resources" component={Resources} />
        </div>
      </Router>
    );
  }
}

export default App;
