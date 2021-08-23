import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShowAllPersons from "./ShowAllPersons";
import SelectedElement from "./SelectedElement";
import Header from "./Header";
const RouterPages = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={ShowAllPersons} />
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
