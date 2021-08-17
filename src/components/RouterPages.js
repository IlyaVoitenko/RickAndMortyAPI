import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./Api";
import SelectedElement from "./SelectedElement";
const RouterPages = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <a href="/">main</a>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Api} />
          <Route
            exact
            path="/selected-element/:id"
            component={SelectedElement}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default RouterPages;
